locals {
 concat_bucket_name = "${terraform.workspace}-${var.bucket_name}"
}

module "userservice_bucket" {
    source = "./../../modules/s3"
    bucket_name = local.concat_bucket_name
    s3_tags = var.tags
}

module "a_record_userservice" {
    source = "./../../modules/route53"
    subdomainName = local.concat_bucket_name
    record_type = "A"
    target_dns = module.userservice_bucket.userservice_website_endpoint
    target_zone_id = module.userservice_bucket.userservice_hosted_zone_id
    evaluate_target_health = true
    depends_on = [module.userservice_bucket]
}

