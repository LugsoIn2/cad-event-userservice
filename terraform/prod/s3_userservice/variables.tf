variable "s3_acl" {
  description = "ACL for S3"
  type = string
  default = "private"
}

variable "bucket_name" {
  description = "Name for S3 bucket"
  type = string
  default = "temp"
}

variable "tags" {
    description = "Key-Value maps for tagging"
    type = map(string)
    default = {}
}

variable "uid" {
  description = "UID Variable"
  type = string
  default = ""
  
}

variable "subdomainName" {
  description = "The Subdomain Name for the record"
  default = "example"
  type    = string
}

variable "record_type" {
  description = "Record Type"
  default = "A"
  type    = string
}

variable "evaluate_target_health" {
  type        = bool
  default     = true
  description = "DNS healthy check from Route53"
}