export const  createProduct = async (req,res)=>{
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message:'All fields are required'});
    }

    const newProduct = new  Product(product);
    try{
        await newProduct.save();
        res.status(201).json({
            success:true,
            data:newProduct
        })
    }catch(err){
        console.error("Error in Create product",err);
        res.status(500).json({success:false,message:'Server Error'});
    }
};

export const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:'Product Deleted'});
    }catch(err){
        console.error("Error in Delete product",err);
        res.status(500).json({success:false,message:'Server Error'});
    }
};

export const getAllProducts = async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
    }catch(err){
        console.error("Error in Fetching product",err);
        res.status(500).json({success:false,message:'Server Error'});
    }
};

export const updateProduct = async(req,res)=>{
    const {id} = req.params;
    const product = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false,message:'product id invalid'});
    }
    
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id , product , {new:true});
        res.status(200).json({success:true,data:updatedProduct});
    }catch(err){
        console.error("Error in Updating product",err);
        res.status(500).json({success:false,message:'Server Error'});
    }
}