import express from 'express';
import {login , createStoreOwner} from '../controller/auth.controller.js';
import {apiLimiter} from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/login',apiLimiter , login);
router.get('/register',createStoreOwner)

export default router;