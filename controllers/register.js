const bcrypt=require('bcrypt');
const user=require('../models/user')


exports.register=async(req,res)=>{
    try{
        const{firstName,lastName,email,password,role}=req.body;

        if(!firstName || !lastName || !email || !password || !role ){
            res.status(400).json({
                success:false,
                message:'Fill all the details ',
            })
        }

        const isuser=await user.findOne({email:email});
        if(isuser){
            res.status(400).json({
                success:false,
                message:'user already present'
            })
        }
        let active;
        let approve;
         
        //at signup time user is already active 
        active = true;

        //firstly approve is false, manager will make is approved.
        approve=false;
        

        //now hash the password 
        let hashedPassword=await bcrypt.hash(password,10);
        //console.log('hashed',hashedPassword);

        const newuser=await user.create({
            firstName,lastName,email,
            password:hashedPassword,
            role,
            active,
            approve
        });
        newuser.password=undefined;

        res.status(200).json({
            success:true,
            data:newuser
        })

    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'internal server error',
        })
    }
}