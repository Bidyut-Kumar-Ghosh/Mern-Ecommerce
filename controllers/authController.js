import userModel from "../models/userModel";
import { hashPassword } from "../helper/authHelper";

export const registerController = async(req,res) => {
    try {
        const {name,email,password,phone,address} = req.body
        
        //validation
        if(!name){
            return res.send({error:'Name is Required'})
        }
        if(!email){
            return res.send({error:'Email is Required'})
        }
        if(!password){
            return res.send({error:'Password is Required'})
        }
        if(!phone){
            return res.send({error:'Phone Number is Required'})
        }
        if(!address){
            return res.send({error:'Address is Required'})
        }

        //check suer
        const exisitingUser = await userModel.findOne({email})
        //existing user
        if(exisitingUser){
            return res.status(200).send({
                success:true,
                message:'Already Register please Login',
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = new userModel({name,email,phone,address,password:hashedPassword}).save()

        res.status(201).send({
            success:true,
            message:'User Register Succesfully',
            user,
        })
    }catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'error in registration',
            error
        })
    }
};

