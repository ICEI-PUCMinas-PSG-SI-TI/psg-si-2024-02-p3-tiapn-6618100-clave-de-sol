# -*- coding: utf-8 -*-
# File name infra/modules/s3/main.tf

resource "aws_s3_bucket" "buckets" {
  for_each = toset(var.bucket_names)

  bucket = substr(
    replace(
      replace(lower("${var.TagEnv}-${var.TagProject}--${each.key}"), "_", "-"),
      "[^a-z0-9-]", "-"
    ),
    0,
    63
  )

  tags = var.tags
}

