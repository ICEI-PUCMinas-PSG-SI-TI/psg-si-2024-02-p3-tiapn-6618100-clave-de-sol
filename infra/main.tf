# -*- coding: utf-8 -*-
# File name main.tf

module "api" {
  source = "./modules/ecr"
  TagEnv = var.TagEnv
  TagProject = var.TagProject
  region = var.aws_region
  repository_name = "api-escola-musica"
  tags = local.common_tags
  folder = "./src/back/EscolaMusica"
  files = [
    "Dockerfile"
  ]
}

###############################################################
## BANCO DE DADOS - O MESMO USADO NO TRABALHO DE BANCO DE DADOS
###############################################################

# module "dynamo_postgres" {
#   source        = "./modules/dynamodb"
#   table_name    = "postgres_trabalho"
#   hash_key      = "banco"
#   region        = var.aws_region
#   TagEnv        = var.TagEnv
#   TagProject    = var.TagProject
#   tags          = local.common_tags
#   enable_stream = false
#   lambda_function_names = [
#   ]
# }
#
# module "ec2_postgresql" {
#   source              = "./modules/ec2_postgres_module"
#   instance_type       = "t2.micro"
#   postgres_db         = "ecomerce"
#   postgres_user       = "puc_aws"
#   postgres_password   = "1234"
#   vpc_cidr            = "10.0.0.0/16"
#   public_subnet_cidr  = "10.0.1.0/24"
#   private_subnet_cidr = "10.0.2.0/24"
#   availability_zone   = "${var.aws_region}a"
#   TagEnv              = var.TagEnv
#   TagProject          = var.TagProject
#   region              = var.aws_region
#   tags                = local.common_tags
#   instance_name       = "${var.TagEnv}---${var.TagProject}---pg"
# }
#
# module "s3_buckets" {
#   source     = "./modules/s3"
#   bucket_names = ["landing", "staging", "art", "athena"]
#   TagEnv     = var.TagEnv
#   TagProject = var.TagProject
#   region     = var.aws_region
#   tags       = local.common_tags
# }
#
# resource "random_password" "postgres_password" {
#   length  = 16
#   special = true
# }
#
# resource "aws_dynamodb_table_item" "postgres_credentials" {
#   table_name = module.dynamo_postgres.name
#   hash_key   = "banco"
#   item = jsonencode({
#     banco = { S : "e-comerce" }
#     ativo = { BOOL : true }
#     host = { S: module.ec2_postgresql.public_ip}
#     database = { S: "ecomerce"}
#     username = { S : "puc_aws" }
#     password = { S : "1234" }
#     pem = { S: module.ec2_postgresql.pem}
#   })
# }

