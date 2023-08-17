// const User = require('../models/models.js')
const User = require('../models/models.js')

exports.home = (req , res) => {
    res.send("jain-srajan-pokemon");
}

exports.createUser= async(req , res)=>{
    try{

        //This is use to store the information.
        const {name , email} = req.body;
        if(!name || !email)
        {
            throw new Error("Name and E-mail are required")
        }


        //Use for saving in a database.
        const user = await User.create({
            name,
            email
        })

        
        res.status(201).json({
            success:true,
            message:'User created successfully',
            user
        })
    }
    
    catch(error)
    {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.getusers = async (req , res)=>{
    
    try {

      const users = await User.find({});

      res.status(201).json({
            success:true,
            message:'User find successfully',
            users
      })
                                                         
    } catch (error) {
        {
            console.log(error);
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }
}

exports.deleteuser = async(req , res)=>{
 
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        
    })
}
}

exports.updateuser = async(req,res)=>{
    try {
        const userid = req.params.id 
        const user = await User.findByIdAndUpdate(userid , req.body)
      
        res.status(200).json({
            success:true,
            message:"User updated successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
}
}