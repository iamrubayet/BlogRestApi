const User = require("../../models/userModel");
const bcrypt = require("bcrypt");


exports.getAllUser = async (req,res,next)=>{
    try {
        const user = await User.find();
        

        res.status(200).json({
            user,
        });
    } catch (error) {
        res.status(401).json({message:"Error occured while getting the data"});
        
    }

}

//update profile

exports.updateUser = async (req,res,next)=>{
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);
        
        if(!user)
        {
            return res.status(400).json({message:"wrong user",
        });
        }

        req.body.password = await bcrypt.hash(req.body.password,11);


        const updateUser = await User.findByIdAndUpdate(userId,req.body,{new:true,
        });

        res.status(200).json({message:"profile updated successfully",updateUser,
    });




    } catch (error) {
        res.status(401).json({message:"you can update your account only",
    });
        
    }

}

// delete profile 

exports.deleteUser = async (req,res,next)=>{
    const userId = req.params.userId;


    try {
        const user = await User.findById(userId);

        if(!user)
        {
            return res.status(400).json({message:"wrong user",
        });
        }

        const deletedUser = await User.findByIdAndDelete(userId);

        res.status(400).json({message:"User deleted successfully",
        deletedUser,
    
    
    });
        
    } catch (error) {

        res.status(401).json({message:"you can delete only your account only",
    });
        
        
    }
}