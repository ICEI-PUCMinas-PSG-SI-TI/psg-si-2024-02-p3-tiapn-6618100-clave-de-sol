variable "TagProject" {
	type = string
}

variable "TagEnv" {
	type = string
}

variable "tags" {
	type = map(string)
}

variable "region" {
	type = string
}

variable "instance_type" {
	description = "Tipo da instância EC2"
	type        = string
	default     = "t2.micro"
}

variable "iam_instance_profile" {
	description = "Perfil IAM para a instância EC2. Se vazio, o módulo cria um automaticamente"
	type        = string
	default     = ""
}

variable "instance_name" {
	description = "Nome para a instância EC2"
	type        = string
}

variable "volume_size" {
	description = "Tamanho do volume raiz em GB"
	type        = number
	default     = 20
}

# Variáveis de configuração do PostgreSQL
variable "postgres_db" {
	description = "Nome do banco de dados PostgreSQL"
	type        = string
}

variable "postgres_user" {
	description = "Usuário do banco de dados PostgreSQL"
	type        = string
}

variable "postgres_password" {
	description = "Senha para o usuário do PostgreSQL"
	type        = string
}

variable "vpc_cidr" {
	description = "CIDR para a VPC"
	type        = string
	default     = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
	description = "CIDR para a sub-rede pública"
	type        = string
	default     = "10.0.1.0/24"
}

variable "private_subnet_cidr" {
	description = "CIDR para a sub-rede privada"
	type        = string
	default     = "10.0.2.0/24"
}

variable "availability_zone" {
	description = "Zona de disponibilidade para as sub-redes"
	type        = string
	default     = "us-east-1a"
}
