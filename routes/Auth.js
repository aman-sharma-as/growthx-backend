const express=require('express');
const router=express.Router();

const {register}=require('../controllers/Auth/register');

router.post('/register',register);

module.exports=router;