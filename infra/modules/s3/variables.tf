# -*- coding: utf-8 -*-
# File name infra/modules/s3/variables.tf

variable "TagProject" {
	type =string
}

variable "TagEnv" {
	type =string
}

variable "tags" {
	type =map(string)
}

variable "region" {
	type =string
}

variable "bucket_names" {
	description = "Lista de nomes dos buckets S3 a serem criados."
	type        = list(string)
}
