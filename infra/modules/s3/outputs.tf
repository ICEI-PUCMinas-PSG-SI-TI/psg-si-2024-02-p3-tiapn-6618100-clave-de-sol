# -*- coding: utf-8 -*-
# File name infra/modules/s3/outputs.tf

output "name" {
	description = "Mapa dos aliases dos buckets S3 para seus nomes completos."
	value       = { for key, bucket in aws_s3_bucket.buckets : key => bucket.bucket }
}
