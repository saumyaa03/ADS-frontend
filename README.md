# ADS Lifestyle Store – Frontend

This repository contains the frontend code for the **ADS Lifestyle Store**, a full-stack e-commerce web application built using React. It provides a responsive user interface for browsing, adding, and managing lifestyle and medical products. This project is connected to a Spring Boot backend (ADS-backend) secured with JWT authentication.

---

## Features

- User registration and login with JWT authentication
- Role-based access control (admin/user)
- Add to cart functionality
- Product listing in responsive card layout
- Admin-only options to add, edit, or delete products
- Light and dark theme toggle
- Fully responsive design using Tailwind CSS
- Axios integration for API communication

---

## Tech Stack

- **React** with functional components
- **React Router DOM** for routing
- **Tailwind CSS** for styling
- **Axios** for HTTP requests
- **React Context API** for global state and auth
- **React Hook Form** and **Yup** for form handling and validation

---

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed.

### 1. Clone the repository

```bash
git clone https://github.com/saumyaa03/ads-frontend.git
cd ads-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app should now be running at [http://localhost:5173](http://localhost:3000)

---

## API Configuration

The frontend communicates with a Spring Boot backend hosted at:

```
http://localhost:8080/api
```

Update `src/axios.js` if necessary:

```js
const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
});
```

---

## Folder Structure

```
src/
├── assets/
├── components/
│   ├── navbar/
│   ├── products/
├── contexts/
│   └── AppContext.jsx
├── screens/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── AddProduct.jsx
├── services/
├── styles/
├── App.jsx
├── axios.jsx
├── main.jsx
```

---

## Authentication and Role Handling

- JWT token is stored using React Context after login.
- Axios includes the token in all secured API requests.
- Admin-only routes (like Add/Update/Delete Product) are conditionally rendered and protected.

---

## Author

**Saumya Rana**  
Master’s in Applied Computer Science, Concordia University  
[GitHub](https://github.com/saumyaa03)  
[LinkedIn](https://linkedin.com/in/saumya-rana12)

---
