import User from '../model/user.model.js';
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';

//assuming store owner cred alreadt saved in mongo collection - it is of future build , admin can create store_owner creds from his login , so that it is not accessible to general registration - password alreadty hashed 

const createStoreOwner = async (req,res) => {
    try {
        // Check if store owner exists
        const storeOwnerExists = await User.findOne({ role: 'store_owner' });
        if (storeOwnerExists) {
            return res.status(200).json({data : storeOwnerExists})
            console.log('Store owner already exists');
            return;
        }

        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('2003', salt);

        const storeOwner = await User.create({
            username: 'clawnic',
            password: hashedPassword,
            name: {
                first_name: 'dhruv',
                last_name: 'sharma'
            },
            role: 'store_owner'
        });

        console.log('Store owner created successfully:', storeOwner.username);
        return res.status(200).json(storeOwner[0])
    } catch (error) {
        console.error('Error creating store owner:', error);
    }
};

const login = async(req,res)=>{
    try{
        const {username , password} = req.body;
        const user = await User.findOne({username});

        if(!user || !(await bcrypt.compare(password  , user.password))){
            return res.status(400).json({
                success:false,
                message:'Invalid credentials'
            });
        }

        const token = jwt.sign(
            {id:user._id , role : user.role},
            process.env.JWT_SECRET,
            {expiresIn:'30d'}
        )

        res.json({
            success:true,
            data:{
                id:user._id , 
                username:user.username,
                role:user.role,
                token
            }
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export {login , createStoreOwner};
