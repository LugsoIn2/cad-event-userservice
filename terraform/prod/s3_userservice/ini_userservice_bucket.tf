locals {
 concat_bucket_name = "${var.bucket_name}-${var.uid}"
}

module "userservice_bucket" {
    source = "./../../modules/s3"
    bucket_name = local.concat_bucket_name
    s3_tags = var.tags
}

# output "userservice_website_endpoint" {
#   value = aws_s3_bucket.userservice_bucket.website_endpoint
# }

# output "userservice_hosted_zone_id" {
#   value = aws_s3_bucket.userservice_bucket.hosted_zone_id
# }


module "a_record_userservice" {
    source = "./../../modules/route53"
    subdomainName = local.concat_bucket_name
    record_type = "A"
    #target_dns = aws_s3_bucket_website_configuration.userservice_bucket-config.website_endpoint
    #target_zone_id = aws_s3_bucket.userservice_bucket.hosted_zone_id
    target_dns = module.userservice_bucket.userservice_website_endpoint
    target_zone_id = module.userservice_bucket.userservice_hosted_zone_id
    #target_dns = "s3.eu-central-1.amazonaws.com"
    #target_zone_id = "Z21DNDUVLTQW6Q"
    evaluate_target_health = true
    depends_on = [module.userservice_bucket]
}

