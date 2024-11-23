module "vpc" {
  source              = "../vpc"
  name_prefix         = "vpc-${var.instance_name}"
  vpc_cidr            = var.vpc_cidr
  public_subnet_cidr  = var.public_subnet_cidr
  private_subnet_cidr = var.private_subnet_cidr
  availability_zone   = var.availability_zone
  TagEnv              = var.TagEnv
  TagProject          = var.TagProject
  region              = var.region
  tags                = var.tags
}

resource "tls_private_key" "ec2_key" {
  algorithm = "RSA"
  rsa_bits  = 2048
}

resource "aws_key_pair" "generated_key_pair" {
  key_name   = "${var.instance_name}-key"
  public_key = tls_private_key.ec2_key.public_key_openssh
}

resource "local_file" "private_key_pem" {
  content  = tls_private_key.ec2_key.private_key_pem
  filename = "${var.instance_name}-key.pem"
}

resource "aws_security_group" "postgres_sg" {
  vpc_id      = module.vpc.vpc_id
  name_prefix = "postgres_sg"

  ingress {
    from_port = 22
    to_port   = 22
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 5432
    to_port   = 5432
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_iam_role" "ec2_role" {
  name = "${var.instance_name}-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "${var.instance_name}-instance--profile"
  role = aws_iam_role.ec2_role.name
}

data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"]
}


resource "aws_instance" "postgres_instance" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type
  key_name               = aws_key_pair.generated_key_pair.key_name
  subnet_id              = module.vpc.public_subnet_id
  vpc_security_group_ids = [aws_security_group.postgres_sg.id]
  iam_instance_profile   = var.iam_instance_profile != "" ? var.iam_instance_profile : aws_iam_instance_profile.ec2_instance_profile.name

  user_data = <<-EOF
              #!/bin/bash
              # Criar docker-compose.yml
              cat <<EOL > /home/ubuntu/docker-compose.yml
              version: '3.8'
              services:
                postgres:
                  image: postgres:latest
                  environment:
                    POSTGRES_DB: "${var.postgres_db}"
                    POSTGRES_USER: "${var.postgres_user}"
                    POSTGRES_PASSWORD: "${var.postgres_password}"
                  ports:
                    - "5432:5432"
                  volumes:
                    - /mnt/efs/pgdata:/var/lib/postgresql/data
                  networks:
                    - etlnet
              networks:
                etlnet:
              EOL


              cat <<EOL > /home/ubuntu/setup_post.sh
              #!/bin/bash

              sudo apt update -y
              sudo apt install -y ca-certificates curl gnupg lsb-release


              sudo mkdir -p /etc/apt/keyrings
              curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg


              echo \
                "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
                $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

              sudo apt update -y
              sudo apt install -y docker-ce docker-ce-cli containerd.io unzip

              sudo systemctl start docker
              sudo systemctl enable docker
              sudo usermod -aG docker ubuntu

              newgrp docker <<EONG
                sudo curl -L "https://github.com/docker/compose/releases/download/v2.11.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                sudo chmod +x /usr/local/bin/docker-compose

                curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
                unzip -o awscliv2.zip
                sudo ./aws/install

                cd /home/ubuntu
                sudo docker-compose up -d

                docker --version
                docker-compose --version

                echo "Instalação e configuração do Docker e Docker Compose concluídas com sucesso."
              EONG
              EOL

              chmod +x /home/ubuntu/setup_post.sh
              /home/ubuntu/setup_post.sh
              EOF

  tags = merge({
    Name = var.instance_name,
    Env = var.TagEnv,
    Project = var.TagProject
  }, var.tags)

  root_block_device {
    volume_size = var.volume_size
  }
}