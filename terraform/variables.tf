variable "vercel_api_token" {
  description = "The Vercel API Token"
  type        = string
  sensitive   = true
}

variable "project_name" {
  description = "The name of the Vercel project"
  type        = string
  default     = "nextish-portfolio"
}

variable "github_repo" {
  description = "The GitHub repository (format: user/repo)"
  type        = string
  default     = "Vithus24/nextish"
}
