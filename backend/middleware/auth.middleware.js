import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
    windowMs : 15* 60 * 1000,
    max:100
});

const protect = async(req,res,next)=>{
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader?.startsWith('Bearer ')){
            return res.status(401).json({
                success: false,
                message: 'No token provided'
            })
        }
        console.log("protect hit");

        const toke = authHeader.split(' ')[1];
        const decoded = jwt.verify(toke  , process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({
            success:false,
            message:'Invalid or expired token'
        });
    }
};

const authorizeStoreOwner = async (req, res, next) => {
    console.log("authoriseStoreOwner hit")
    if (req.user.role !== 'store_owner') {
        return res.status(403).json({
            success: false,
            message: 'Access denied: Store owners only'
        });
    }
    next();
};

export { authorizeStoreOwner, protect, apiLimiter };