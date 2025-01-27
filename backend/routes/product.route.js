import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import Product from '../model/product.model.js';
import {createProduct  , deleteProduct , getAllProducts , updateProduct} from '../controller/product.controller.js';


router.post('/',createProduct);

router.delete('/:id',deleteProduct)

router.get('/',getAllProducts);


router.put('/:id',updateProduct);

export default router;