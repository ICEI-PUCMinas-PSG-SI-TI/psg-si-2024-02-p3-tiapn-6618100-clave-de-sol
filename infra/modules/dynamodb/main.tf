# -*- coding: utf-8 -*-
# File name infra/modules/dynamodb/main.tf

resource "aws_dynamodb_table" "this" {
  name         = "${var.TagEnv}-${var.TagProject}-${var.table_name}"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = var.hash_key

  attribute {
    name = var.hash_key
    type = "S"
  }

  tags = var.tags

  stream_enabled   = var.enable_stream
  stream_view_type = var.enable_stream ? var.stream_view_type : null

}


resource "aws_lambda_event_source_mapping" "this" {
  for_each = var.enable_stream && length(var.lambda_function_names) > 0 ? toset(var.lambda_function_names) : []
  event_source_arn  = aws_dynamodb_table.this.stream_arn
  function_name     = each.key
  starting_position = "LATEST"
}
