# Product Store MERN Project

A beginner-friendly MERN (MongoDB, Express.js, React.js, Node.js) stack project implementing a basic product store with CRUD operations.

🚀 [Live Demo](https://product-store-pttz.onrender.com/)

## Features

- Product listing with search and filter
- User authentication
- Shopping cart functionality
- Admin dashboard for product management
- Responsive design

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB
- npm or yarn

## Quick Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd product-store
```

2. Install Dependencies
```bash
npm install
```
This will install both frontend and backend dependencies.

3. Environment Setup
Create a .env file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/product-store
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

4. Start the application
```bash
# Development mode (runs both frontend & backend)
npm run dev

# Production build
npm run build
npm start
```

The application will be running on:
- Frontend: http://localhost:3000 (in development)
- Backend: http://localhost:5000
- Production build: http://localhost:5000 (serves frontend from backend)

## Project Structure

```
product-store/
├── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── frontend/
    ├── src/
    ├── public/
    └── package.json
```

## Available Scripts

- `npm run dev` - Runs frontend and backend in development mode
- `npm run client` - Runs only frontend
- `npm run server` - Runs only backend
- `npm run build` - Builds frontend for production
- `npm start` - Starts production server

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

## Contributing

Feel free to fork the project and submit pull requests.

## License

MIT License
