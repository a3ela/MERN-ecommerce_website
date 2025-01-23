# MERN Ecommerce Website

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

The **EcomHub** is a full-stack application designed to provide a seamless online shopping experience. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform supports essential ecommerce functionalities such as user authentication, product management, cart operations, and payment integration.

[Live Demo](https://mern-ecommerce-website-gf43.onrender.com/)

---

## Features

- **User Authentication**: Sign up, log in, and manage user sessions securely using JWT.
- **Product Management**: Dynamic product listing, filtering, and searching.
- **Shopping Cart**: Add, update, and remove items in the cart.
- **Payment Gateway**: Secure checkout using PayPal integration.
- **Admin Dashboard**: Manage products, users, and orders.

---

## Technologies Used

- **Frontend**:
  - React.js (with React Router and Redux)
- **Backend**:
  - Node.js and Express.js
- **Database**:
  - MongoDB (via Mongoose)
- **Authentication**:
  - JSON Web Tokens (JWT)
- **Payment Integration**:
  - PayPal API

---

## Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- MongoDB (local or cloud-based instance)
- PayPal account for payment integration

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/a3ela/MERN-ecommerce_website.git
   cd MERN-ecommerce_website
   ```

2. **Install dependencies:**

   - Install server dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Install client dependencies:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Set up environment variables:**

   - Create `.env` files in both `backend` and `frontend` folders.
   - Example for `backend/.env`:
     ```env
     MONGO_DB_URI=<your_mongodb_uri>
     PORT=8080
     SECRET=<your_secret>
     NODE_ENV=development
     PAYPAL_CLIENT_ID=<your_paypal_client_id>
     PAYPAL_APP_SECRET=<your_paypal_app_secret>
     PAYPAL_API_URL=https://api-m.sandbox.paypal.com

     ```

4. **Run the application:**

   - Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend:
     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the app:**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

---

## Usage

1. Sign up or log in as a user to browse products and add them to the cart.
2. Proceed to checkout and complete payment via Stripe.
3. Admin users can log in to manage products, users, and orders.

---

## Folder Structure

```plaintext
MERN-ecommerce_website/
├── backend/
│   ├── config/         # Configuration files (e.g., database, environment)
│   ├── controllers/    # Logic for handling routes
│   ├── models/         # Mongoose models
│   ├── routes/         # API endpoints
│   ├── middleware/     # Custom middleware
│   ├── server.js       # Entry point for the backend server
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # Page components
│   │   ├── redux/      # State management setup
│   │   ├── App.js      # Main app component
│   │   ├── index.js    # Entry point for React
├── README.md           # Project documentation
```

---

## Contributing

I welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes.
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork and open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [PayPal](https://PayPal.com/) for their payment API.
- [MERN Stack Documentation](https://mern.io/).
- Open-source contributors for their tools and libraries.

---

For more details, visit the [GitHub Repository](https://github.com/a3ela/MERN-ecommerce_website).
