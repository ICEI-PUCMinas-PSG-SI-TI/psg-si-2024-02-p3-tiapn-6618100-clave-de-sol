# -*- coding: utf-8 -*-
# File name infra/modules/dynamodb/variables.tf

variable "TagProject" {
	type =string
}

variable "TagEnv" {
	type =string
}

variable "region" {
	type =string
}


variable "table_name" {
  description = "Nome da tabela DynamoDB"
  type        = string
}

variable "hash_key" {
  description = "Nome da chave de partição (hash key)"
  type        = string
}

variable "tags" {
  description = "Tags comuns para os recursos"
  type        = map(string)
  default     = {}
}

variable "enable_stream" {
  description = "Nome do Projeto"
  type        = bool
  default = false
}


variable "stream_view_type" {
  description = "Tipo de visualização do stream (NEW_IMAGE, OLD_IMAGE, NEW_AND_OLD_IMAGES, KEYS_ONLY)"
  type        = string
  default     = "NEW_AND_OLD_IMAGES"
}

variable "lambda_function_names" {
  description = "Nome da função Lambda que será disparada pelo stream"
  type        = list(string)
  default     = []
}
