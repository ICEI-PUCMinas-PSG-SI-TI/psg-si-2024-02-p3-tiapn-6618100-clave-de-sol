variable "TagProject" {
  description = "Nome do projeto"
  type = string
}

variable "TagEnv" {
  description = "Nome do ambiente"
  type = string
}

variable "aws_region" {
  description = "Regiao AWS"
  type = string
}

variable "github_acc" {
  description = "User/Organizations/repo GitHub"
  type        = string
}

variable "updated_by" {
  description = "Criador do repositório"
  type        = string
}

locals {
  tags = {
    env              = var.TagEnv
    project          = var.TagProject
    updated_by       = var.updated_by
    purpose          = "CI-CD"
    version          = "v1.0"
  }
}