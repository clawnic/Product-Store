import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js';


const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/products" , productRoutes);

app.listen(PORT , () => {
    connectDB();
    console.log(`Server is running on localhost:${PORT} hello dhruv`);
})

