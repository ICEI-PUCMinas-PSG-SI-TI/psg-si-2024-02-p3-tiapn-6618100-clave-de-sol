# -*- coding: utf-8 -*-
# File name infra/modules/dynamodb/outputs.tf

output "id" {
  description = "ID da tabela DynamoDB"
  value       = aws_dynamodb_table.this.id
}

output "arn" {
  description = "ARN da tabela DynamoDB"
  value       = aws_dynamodb_table.this.arn
}

output "name" {
  description = "Nome da tabela DynamoDB"
  value       = aws_dynamodb_table.this.name
}

