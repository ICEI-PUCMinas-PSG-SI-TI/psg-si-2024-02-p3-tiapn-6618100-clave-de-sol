# -*- coding: utf-8 -*-
# File name infra/modules/ec2_postgres_module/outputs.tf

output "instance_id" {
	description = "ID da instância EC2"
	value       = aws_instance.postgres_instance.id
}

output "public_dns" {
	description = "DNS público da instância EC2"
	value       = aws_instance.postgres_instance.public_dns
}

output "public_ip" {
	description = "IP público da instância EC2"
	value       = aws_instance.postgres_instance.public_ip
}

output "ssh_connect" {
	description = "Comando para conexão SSH"
	value       = "ssh -i ${aws_key_pair.generated_key_pair.key_name} ubuntu@${aws_instance.postgres_instance.public_ip}"
}

output "postgres_db" {
	description = "Nome do banco de dados PostgreSQL configurado"
	value       = var.postgres_db
}


output "pem" {
	value = tls_private_key.ec2_key.private_key_pem
}


