
const Category = require("../../models/categoryModel");



// create post
exports.createCategory = async (req,res,next)=>{
    const {name}= req.body;

    try {
        const category = await Category.create({
            name,


        });

        res.status(201).json(category);
        
    } catch (error) {
        res.status(401).json({message:'something went wrong',
    error,
});
        
    }

};


// get All category


exports.getCategory = async(req,res,next)=>{



    try {
       const category = await Category.find();

       res.status(400).json({message:"category succesfull"});

        
    } catch (error) {
        res.status(401).json({
    message:"something went wrong",
    error,
      });
        
    }

}


