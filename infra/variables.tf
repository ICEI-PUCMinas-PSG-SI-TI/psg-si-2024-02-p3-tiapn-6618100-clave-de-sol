# -*- coding: utf-8 -*-
# File name variables.tf

variable "TagProject" {
  description = "Nome do projeto"
  type        = string
}

variable "TagEnv" {
  description = "Nome do ambiente"
  type        = string
}

variable "aws_region" {
  description = "Regiao AWS"
  type        = string
}

variable "creation_date" {
  description = "Data de criação do repositório"
  type        = string
}

variable "author" {
  description = "Criador do repositório"
  type        = string
}

variable "S3Name" {
  type = string
}

variable "database" {
  type = string
}

variable "userpg" {
  type = string
}

variable "pwpg" {
  type = string
}


locals {
  common_tags = {
    env           = var.TagEnv
    author        = var.author
    project       = var.TagProject
    creation_date = var.creation_date
    cost_center   = "DataOps"
    version       = "v1.0"
  }
}