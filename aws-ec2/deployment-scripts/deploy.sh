#!/bin/bash
sudo apt update
sudo apt install python3-pip python3-dev libpq-dev nginx curl
sudo pip3 install virtualenv
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
sudo systemctl start gunicorn
sudo systemctl enable gunicorn
sudo systemctl restart nginx
