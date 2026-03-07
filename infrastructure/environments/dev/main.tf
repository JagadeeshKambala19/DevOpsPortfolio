terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.5"
}

provider "aws" {
  region = "ap-south-1"
}

#############################################
# S3 Bucket for React Frontend (Dev)
#############################################

resource "aws_s3_bucket" "frontend_dev" {
  bucket = var.bucket_name

  tags = {
    Environment = "dev"
    Project     = "react-devops-platform"
  }
}

#############################################
# Enable Versioning
#############################################

resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.frontend_dev.id

  versioning_configuration {
    status = "Enabled"
  }
}

#############################################
# Enable Encryption
#############################################

resource "aws_s3_bucket_server_side_encryption_configuration" "encryption" {
  bucket = aws_s3_bucket.frontend_dev.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

#############################################
# Block Public Access
#############################################

resource "aws_s3_bucket_public_access_block" "block_public" {
  bucket = aws_s3_bucket.frontend_dev.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

#############################################
# CloudFront Distribution
#############################################

resource "aws_cloudfront_distribution" "frontend_cdn" {

  origin {
    domain_name = aws_s3_bucket.frontend_dev.bucket_regional_domain_name
    origin_id   = "s3-dev-origin"
  }

  enabled = true

  default_cache_behavior {
    target_origin_id = "s3-dev-origin"

    allowed_methods = [
      "GET",
      "HEAD"
    ]

    cached_methods = [
      "GET",
      "HEAD"
    ]

    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = "dev"
  }
}