# HomelyHub

**HomelyHub** is a full-stack **hotel booking web application** inspired by Airbnb, built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with payment integration via **Razorpay** and cloud image storage via **ImageKit**.  
It allows users to browse properties, search/filter listings, book stays, manage bookings, and even list their own properties.

---

<div align="center">

## 🛠️ Tech Stack

**Frontend**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Backend**

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

**Services & Tools**

![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)
![ImageKit](https://img.shields.io/badge/ImageKit-FF6B35?style=for-the-badge&logoColor=white)
![Mailtrap](https://img.shields.io/badge/Mailtrap-22D172?style=for-the-badge&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

</div>

---

<div align="center">

## ✨ Key Features

</div>

🔐 **JWT Authentication** – Secure user login & signup  
🏠 **Property Listings** – Users can add new properties with images  
🔍 **Search & Filters** – Find properties by location, price, or type  
📋 **Booking History** – View past and upcoming bookings  
🔄 **Redux Toolkit** – Global state management  
💳 **Razorpay Integration** – Secure online payments for bookings  
☁️ **ImageKit Integration** – Cloud storage for property images  
✨ **GSAP Animations** – Smooth property card animations  
📧 **Mailtrap** – Email notifications using mailtrap

---

<div align="center">

## 📸 Application Preview

![App Screenshot](frontend/public/readme/wsa-homelyhub-app-screenshot.jpg)

*Experience the modern and intuitive interface of HomelyHub*

</div>

---

<div align="center">

## 📁 Project Structure

</div>

```
🏠 HomelyHub/
├── 📱 frontend/          # React.js Client Application
│   ├── src/
│   │   ├── components/     # Reusable UI Components
│   │   ├── store/          # Redux Store & Slices
│   │   └── utils/          # Helper Functions
│   └── public/         # Static Assets
└── ⚙️ backend/           # Node.js Server Application
    ├── src/
    │   ├── controllers/    # Route Controllers
    │   ├── models/         # Database Models
    │   ├── routes/         # API Routes
    │   └── utils/          # Utility Functions
    └── .env.example     # Environment Template
```

**📱 Frontend:** React.js application with Redux state management, GSAP animations, and responsive UI  
**⚙️ Backend:** Node.js & Express server with JWT authentication, payment processing, and cloud integrations  

---

<div align="center">

## 🚀 Quick Start Guide

</div>

### 1️⃣ Clone the Repository
```bash
git clone <REPOSITORY_URL>
cd HomelyHub
```

### 2️⃣ Install Dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3️⃣ Environment Setup

**Backend Configuration** - Copy `.env.example` to `.env` and configure:
```env
# Server Configuration
PORT=8080
MONGO_URI=mongodb://localhost:27017/homelyhub
JWT_SECRET=your_super_secret_jwt_key

# Third-party Services
IMAGEKIT_PUBLICKEY=your_imagekit_public_key
IMAGEKIT_PRIVATEKEY=your_imagekit_private_key
IMAGEKIT_URLENDPOINT=your_imagekit_url_endpoint

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret

MAILTRAP_SMTP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_SMTP_USER=your_mailtrap_username
MAILTRAP_SMTP_PASS=your_mailtrap_password
```

**Frontend Configuration** - Copy `.env.example` to `.env`:
```env
VITE_API_BASE_URL=http://localhost:8080
```

### 4️⃣ Launch the Application
```bash
# Start backend server (Terminal 1)
cd backend
npm run dev

# Start frontend development server (Terminal 2)
cd frontend
npm run dev
```

🎉 **That's it!** Visit `http://localhost:5173` to see HomelyHub in action!

---

<div align="center">

<div align="center">

### 🏠 HomelyHub - Your Gateway to Perfect Stays

**Built with ❤ by [Manda Vijaya Sri](https://github.com/vijayasri-manda)**

WSA Project 2025

---

"Making every journey feel like home"

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vijayasri-manda)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vijaya-sri-manda-399a56343/)

</div>

---
