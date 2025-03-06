# 📝 Blog Post Web Application

This is a full-stack Blog Post Web Application built using **Python Django** (backend), **React.js** (frontend), and deployed on **AWS EC2**. The application provides CRUD functionality for managing blog posts.

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) blog posts.
- Backend API using Django REST framework.
- Frontend built with React.js.
- Deployed on AWS EC2 with Nginx and Gunicorn.

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Revanth72/Blog-Post-web-application-using-Django-and-React.git
cd Blog-Post-web-application-using-Django-and-React
```

---

## 🎯 Backend (Django) Setup

### 2️⃣ Set up Virtual Environment
```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3️⃣ Configure Database 
Update `DATABASES` in `backend/BlogApp/settings.py` with your PostgreSQL/MySQL details.

### 4️⃣ Run Migrations & Start Server
```bash
python manage.py makemigrations blog
python manage.py migrate
python manage.py runserver
```

---

## 🎨 Frontend (React.js) Setup

### 5️⃣ Install Dependencies & Start React App
```bash
cd frontend
npm install
npm start
```
This will start the frontend at `http://localhost:3000`.

---

## 🌍 Deploying on AWS EC2

### 6️⃣ Connect to EC2 Instance
```bash
ssh -i your-key.pem ubuntu@your-ec2-instance-ip
```

### 7️⃣ Install Required Packages
```bash
sudo apt update
sudo apt install python3-pip python3-dev libpq-dev nginx curl
```

### 8️⃣ Run Deployment Script
```bash
cd aws-ec2/deployment-scripts
chmod +x deploy.sh
./deploy.sh
```

### 9️⃣ Configure Nginx
```bash
sudo cp nginx.conf /etc/nginx/sites-available/default
sudo systemctl restart nginx
```


## ✨ Contributing

Feel free to submit a pull request! Open issues if you find bugs.

---







