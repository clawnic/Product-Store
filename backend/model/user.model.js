import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:5,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },name:{
        first_name:{
            type:String,
            required:true,
            trim:true,
            minLength:2
        },
        last_name:{
            type:String,
            required: true,
            trim:true,
            minLength:2
        }
    },image:{
        type:String,
        default:'https://imgs.search.brave.com/rcHesFATCFZr0zF8Ju5Bv5uTH4NRh6nCzyyL-zh9uTE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTAvRGVm/YXVsdC1Qcm9maWxl/LVBpY3R1cmUtUE5H/LUZyZWUtRG93bmxv/YWQucG5n'
    },
    role:{
        type:String,
        enum:['user','admin','store_owner'],
        default:'user'
    }

},{
    timestamps:true
});

const User = new mongoose.model('User' , userSchema);
export default User;
