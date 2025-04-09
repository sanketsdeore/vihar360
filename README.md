# 🏡 Real Estate Listing App

_A modern, user-friendly platform to explore, buy, rent, and list properties effortlessly._

---

## 📌 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📌 Installation](#-installation)
- [🔑 Environment Variables](#-environment-variables)
- [📌 API Documentation](#-api-documentation)
- [📌 API Endpoints](#-api-endpoints)
  - [🔑 Authentication Routes](#-authentication-routes-api-auth)
  - [👤 User Routes](#-user-routes-api-user)
  - [🏠 Listing Routes](#-listing-routes-api-listing)
- [🛠 Future Enhancements](#-future-enhancements)
- [👌 Contributing](#-contributing)
- [📝 License](#-license)
- [✨ Support & Feedback](#-support--feedback)

---

## 🚀 Features

✅ Responsive UI with TailwindCSS  
✅ Interactive Swiper for property listings  
✅ Authentication (Sign-in & Sign-up)  
✅ Secure Profile Management (Private Route)  
✅ List, Update & Manage Properties  
✅ Filter Properties (Rent, Sale, Offers)  
✅ Framer Motion Animations for a smooth UX

---

## 🛠️ Tech Stack

- **Frontend:** React.js, TailwindCSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** React Hooks
- **UI Library:** Swiper.js for carousels

---

## 📌 Installation

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/ganesh2394/Vihar360-Real-Estate-App.git
cd real-estate
```

### **2️⃣ Install Dependencies**

#### Install backend dependencies

```bash
npm install
```

#### Install frontend dependencies

```bash
cd ../client
npm install
```

### **3️⃣ Start the App**

#### Start the backend

```bash
npm run dev
```

> Runs the backend on [http://localhost:3000](http://localhost:3000)

#### Start the frontend

```bash
cd ../client
npm run dev
```

> Runs the app on [http://localhost:5173/](http://localhost:5173/)

---

## 🔑 Environment Variables

Create a `.env` file and add:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

---

## API Documentation

The API documentation for this project is available in the Postman collection. You can access json file directly here:

📄 **[Download Postman Json](https://github.com/ganesh2394/Vihar360-Real-Estate-App/blob/main/client/public/doc/Vihar360%20Real%20Estate%20Documentation.postman_collection.json?raw=true)**

Alternatively, you can access the online API documentation on Postman:

🌐 **[View API Docs on Postman](https://documenter.getpostman.com/view/38671941/2sAYk8wPAG)**

---

## 📌 API Endpoints

### 🔑 Authentication Routes (`/api/auth`)

| Method | Endpoint   | Description           | Protected |
| ------ | ---------- | --------------------- | --------- |
| POST   | `/signup`  | Register a new user   | ❌ No     |
| POST   | `/signin`  | User login            | ❌ No     |
| POST   | `/google`  | Google authentication | ❌ No     |
| GET    | `/signout` | Logout user           | ✅ Yes    |

---

### 👤 User Routes (`/api/user`)

| Method | Endpoint        | Description       | Protected |
| ------ | --------------- | ----------------- | --------- |
| GET    | `/:id`          | Get user details  | ✅ Yes    |
| POST   | `/update/:id`   | Update user       | ✅ Yes    |
| DELETE | `/delete/:id`   | Delete user       | ✅ Yes    |
| GET    | `/listings/:id` | Get user listings | ✅ Yes    |

---

### 🏠 Listing Routes (`/api/listing`)

| Method | Endpoint      | Description          | Protected |
| ------ | ------------- | -------------------- | --------- |
| POST   | `/create`     | Create a listing     | ✅ Yes    |
| POST   | `/update/:id` | Update a listing     | ✅ Yes    |
| DELETE | `/delete/:id` | Delete a listing     | ✅ Yes    |
| GET    | `/get/:id`    | Get a single listing | ❌ No     |
| GET    | `/get`        | Get all listings     | ❌ No     |

---

## 🛠 Future Enhancements

🔹 Add a **map view** for property locations  
🔹 Implement **chat** between buyers & sellers  
🔹 Add **reviews & ratings** for listings  
🔹 Integrate a **payment gateway** for transactions

---

## 👌 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a **Pull Request**

---

## 📝 License

This project is **MIT licensed**.

---

## ✨ Support & Feedback

If you find any bugs or have feature requests, open an issue or reach out via GitHub Discussions!

### 💎 Contact

💡 Have questions? Reach out to me!  
📩 Email: gp2581739@gmail.com  
🐙 GitHub: [GitHub Profile](https://github.com/ganesh2394/)  
🚀 LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/ganesh-prasad09/)
