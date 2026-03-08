## React AWS DevOps Deployment – Execution Guide

## 1. Introduction
This document explains the steps required to run, deploy, and destroy the React AWS DevOps deployment project.
The project demonstrates a production-style deployment of a React application using Infrastructure as Code and CI/CD automation.
The system uses the following cloud services:
Amazon S3 for static application hosting
Amazon CloudFront for global content delivery
GitHub Actions for CI/CD automation
Amazon CloudWatch for monitoring and metrics
All infrastructure resources are provisioned using Terraform.

## 2. Prerequisites
Before running the project ensure the following tools are installed on your system.
Required tools
**Terraform**
**AWS CLI**
**Node.js (version 18 or above)**
**Git**
Verify installations by running:
**terraform -version**
**aws --version**
**node -v**
**git --version**

## 3. Clone the Repository
Clone the project repository to your local system.
**git clone https://github.com/JagadeeshKambala19/DevOpsPortfolio.git**
**cd DevOpsPortfolio**
This will download the complete project including application code and Terraform infrastructure.

## 4. Configure AWS Credentials
Terraform and AWS CLI require AWS credentials.
Run the following command:
**aws configure**
Provide the following details:
**AWS Access Key ID**
**AWS Secret Access Key**
**Default Region (example: us-east-1)**
**Output format: json**
Verify authentication by running:
**aws sts get-caller-identity**
If successful, the command will return your AWS account details.

## 5. Install Application Dependencies
Install the Node.js dependencies required for the React application.
**npm install**
This installs all packages defined in the package.json file.

## 6. Create Development Infrastructure
Navigate to the Terraform development environment directory.
**cd infrastructure/environments/dev**
Initialize Terraform.
**terraform init**
Preview the resources Terraform will create.
**terraform plan**
Create the infrastructure.
**terraform apply**
Confirm the operation by typing:
yes
Terraform will provision the following AWS resources:
Development S3 bucket for static hosting
CloudFront distribution for content delivery
Security and access configurations

## 7. Build the React Application
Build the production version of the React application.
**npm run build**
The compiled application will be generated inside the build directory.
This directory contains the static files that will be deployed to the S3 bucket.

## 8. Deploy the Application
Deployment is handled automatically through the CI/CD pipeline.
Push the code to the develop branch.
**git push origin develop**
The CI/CD pipeline will automatically perform the following actions:
Install application dependencies
Build the React application
Upload the build files to the S3 bucket
Invalidate the CloudFront cache
After the pipeline completes successfully, the application will be available through the CloudFront distribution URL.

## 9. Access the Application
After deployment, open the CloudFront distribution URL in your browser.
Example:
**https://xxxxxxxx.cloudfront.net**
The React application will be served through the global CDN.

## 10. Destroy Infrastructure (Avoid AWS Billing)
To prevent unnecessary AWS charges, destroy the infrastructure when it is not in use.
Navigate to the development environment directory.
**cd infrastructure/environments/dev**
Run the following command.
**terraform destroy**
Confirm the operation by typing:
yes
Terraform will delete all AWS resources created for the development environment.
If a production environment was created, repeat the same process.
**cd ../prod**
**terraform destroy**

## 11. Recreate Infrastructure Anytime
Because the infrastructure is defined using Terraform, the environment can be recreated at any time.
Run the following commands again.
**terraform init**
**terraform apply**
Terraform will recreate all necessary AWS resources automatically.

## 12. Cost Awareness
To avoid unnecessary cloud charges, it is recommended to destroy the infrastructure when it is not actively being used.
The infrastructure can be recreated at any time using Terraform.