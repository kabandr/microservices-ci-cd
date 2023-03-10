# Import Terraform provider
terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

# Declare DigitalOcean token
variable "do_token" {
  type = string
}

# Cluster status check
output "cluster_status" {
  value = digitalocean_kubernetes_cluster.cluster.status
}


# Configure the DigitalOcean provider
provider "digitalocean" {
  token = "${var.do_token}"
}

# Create a Kubernetes cluster
resource "digitalocean_kubernetes_cluster" "cluster" {
  name    = "my-cluster"
  region  = "lon1"
  version = "latest"

  node_pool {
    name       = "autoscale-worker-pool"
    size       = "s-1vcpu-2gb"
    auto_scale = true
    min_nodes  = 1
    max_nodes  = 3
  }
}
