import express from 'express';
const router = express.Router();
import {createProduct  , deleteProduct , getAllProducts , updateProduct} from '../controller/product.controller.js';
import { protect, authorizeStoreOwner } from '../middleware/auth.middleware.js';

//PUBLIC ROUTE
router.get('/',getAllProducts);

//PROTECTED ROUTES  - only store owner can access
router.post('/',protect ,authorizeStoreOwner, createProduct);

router.delete('/:id',protect ,authorizeStoreOwner,deleteProduct)

router.put('/:id',protect ,authorizeStoreOwner,updateProduct);

export default router;