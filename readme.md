# Product Store MERN Project

A beginner-friendly MERN (MongoDB, Express.js, React.js, Node.js) stack project implementing a basic product store with CRUD operations.

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

## Setup Instructions

1. Clone the repository
```bash
git clone <your-repo-url>
cd product-store
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Environment Setup
Create two .env files:

Backend (.env):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/product-store
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

Frontend (.env):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the application
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm start
```

The application will be running on:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
product-store/
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
