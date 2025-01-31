import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
dotenv.config();
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js';
import authRoutes from  './routes/auth.route.js'


const app = express();

app.set('trust proxy', 1);
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use("/api/products" , productRoutes);

app.use("/api/auth" , authRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname , "frontend","dist","index.html"));
    })
}

app.listen(PORT , () => {
    connectDB();
    console.log(`Server is running on localhost:${PORT} hello dhruv`);
})

