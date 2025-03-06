# Deployment Instructions for Blog Post Web App

1. SSH into your EC2 instance.
2. Install required software packages using `deploy.sh`.
3. Configure Nginx using the provided `nginx.conf`.
4. Set up Gunicorn and restart Nginx.
5. Make sure your security group allows HTTP traffic on port 80.
