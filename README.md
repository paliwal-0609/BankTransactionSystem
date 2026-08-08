# Bank Transaction System

A modern, lightweight Node.js and Express backend for managing banking operations such as user authentication, account creation, balance checks, and secure money transfers. The project uses a ledger-based transaction model to keep account balances accurate and auditable.

## ✨ Features

- Secure user registration and login
- Account creation for authenticated users
- Balance lookup for individual accounts
- Internal money transfer between accounts
- Initial funds transfer support
- Transaction email notifications
- MongoDB persistence with Mongoose
- Token Black Listing for user logout

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT authentication
- Cookie-based session handling
- Nodemailer for email delivery

## 📁 Project Structure

- [src/app.js](src/app.js) - Express app setup and route registration
- [src/controllers](src/controllers) - Request handlers for auth, accounts, and transactions
- [src/models](src/models) - Mongoose schemas and models
- [src/routes](src/routes) - API route definitions
- [src/services](src/services) - Service integrations such as email delivery

## 🚀 Installation

1. Clone the repository
2. Install dependencies:

   ```cmd
   npm install dependency_name
   ```

3. Create a `.env` file and add the required values:

   ```env
   DB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIENT_ID=your_google_client_id
   CLIENT_SECRET=your_google_client_secret
   REFRESH_TOKEN=your_google_refresh_token
   EMAIL_USER=your_email_address
   ```

4. Start the server:

   ```cmd
   npm run start
   ```

## ▶️ Usage

Run the app in development mode:

```cmd
npm run dev
```

The server will start on port `3000` by default.

## 🌐 Live Demo

A live deployment of this project is available on Render:

- https://banktransactionsystem-gm1n.onrender.com

## 📡 API Overview

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Accounts
- `POST /api/accounts`
- `GET /api/accounts`
- `GET /api/accounts/balance/:accountId`

### Transactions
- `POST /api/transactions`
- `POST /api/transactions/system/initial-funds`

## 📄 License

This project is licensed under the MIT License.
