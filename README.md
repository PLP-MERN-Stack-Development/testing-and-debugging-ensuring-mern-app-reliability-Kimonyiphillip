README.md

markdown
# MERN Testing & Debugging Assignment

A comprehensive MERN stack application demonstrating testing and debugging strategies with Jest, Supertest, React Testing Library, and Vitest.

## 🚀 Features

- **Backend API**: Express.js with MongoDB/Mongoose
- **Frontend**: React with Vite and Tailwind CSS
- **Testing**: Comprehensive test suite with 70%+ coverage
- **API Testing**: Integration tests with Supertest
- **Frontend Testing**: Unit tests with React Testing Library
- **Performance Testing**: Response time benchmarks

## 🛠 Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

### Frontend
- React 18
- Vite (Build tool)
- Tailwind CSS
- Axios for API calls

### Testing
- **Jest**: Test framework
- **Supertest**: HTTP assertion testing
- **React Testing Library**: React component testing
- **Vitest**: Frontend test runner
- **MongoDB Memory Server**: In-memory MongoDB for testing

## 📁 Project Structure
mern-testing/
├── server/ # Express.js backend
│ ├── src/ # Source code
│ │ ├── models/ # Mongoose models
│ │ ├── controllers/ # Route controllers
│ │ ├── routes/ # API routes
│ │ └── server.js # Server entry point
│ └── tests/ # Backend tests
│ ├── integration/ # API integration tests
│ └── performance/ # Performance tests
├── client/ # React frontend
│ ├── src/ # Source code
│ │ ├── components/ # React components
│ │ └── tests/ # Frontend tests
│ └── vite.config.js # Vite configuration
└── README.md

text

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd mern-testing
Install all dependencies

bash
npm run install-all
Set up environment variables

Copy server/.env.example to server/.env

Copy client/.env.example to client/.env

Update the values as needed

Start the development servers

bash
npm run dev
This starts both:

Backend: http://localhost:5000

Frontend: http://localhost:5173

🧪 Testing
Backend Testing
bash
# Run all backend tests
cd server
npm test

# Run tests with coverage
npm run test:coverage

# Run integration tests only
npm run test:integration

# Run performance tests only
npm run test:performance
Frontend Testing
bash
# Run frontend tests
cd client
npm test

# Run tests with coverage
npm run test:coverage
Test Coverage Goals
✅ 70%+ Statement coverage

✅ 60%+ Branch coverage

✅ 70%+ Function coverage

✅ 70%+ Line coverage

📊 API Endpoints
Users
GET /api/users - Get all users

GET /api/users/:id - Get user by ID

POST /api/users - Create new user

PUT /api/users/:id - Update user

DELETE /api/users/:id - Delete user

Products
GET /api/products - Get all products (with filtering)

GET /api/products/:id - Get product by ID

POST /api/products - Create new product

PUT /api/products/:id - Update product

DELETE /api/products/:id - Delete product

Health
GET /api/health - API health check

🐛 Debugging
Backend Debugging
Use console.log strategically

Enable debug mode: NODE_ENV=development

Use Chrome DevTools with --inspect flag

Frontend Debugging
React DevTools browser extension

Chrome DevTools Network tab

Component state inspection

Common Issues
Port already in use: Change PORT in .env file

MongoDB connection: Ensure MongoDB is running

CORS errors: Check proxy configuration in vite.config.js

📈 Testing Strategy
Backend Testing
Unit Tests: Individual functions and middleware

Integration Tests: API endpoints with database

Performance Tests: Response time benchmarks

Error Handling: Validation and error responses

Frontend Testing
Component Tests: React components with React Testing Library

User Interaction: Event handling and state changes

Accessibility: ARIA labels and semantic HTML

🚀 Deployment
Backend Deployment
Set NODE_ENV=production

Update MongoDB connection string

Set secure JWT secret

Deploy to Heroku, Railway, or similar

Frontend Deployment
Build: npm run build

Deploy to Netlify, Vercel, or similar

Update API URL in environment variables

📝 Assignment Requirements
✅ Completed Requirements:

Set up testing environments for client and server

Write unit tests for React components and server functions

Implement integration tests for API endpoints

Create performance tests for critical user flows

Apply debugging techniques for common MERN stack issues

Achieve at least 70% code coverage for unit tests

Document testing strategy in README.md

Include screenshots of test coverage reports

🎯 Learning Outcomes
Comprehensive understanding of MERN stack testing

Practical experience with Jest and Supertest

Debugging strategies for full-stack applications

Test-driven development (TDD) principles

Performance testing and optimization

🤝 Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Open a Pull Request

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
phillip kimonyi
