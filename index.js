const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const dotenv =  require('dotenv');
const morgan = require("morgan");
const multer =  require("multer");
const authRouter = require('./routes/auth/authRouter');
const userRoute = require('./routes/auth/userRoute');
const postRoute = require('./routes/auth/postRoute');
const categoryRoute = require('./routes/auth/categoryRoute');

dotenv.config();

app.use(express.json());
app.use(morgan("dev"));

//file upload by multer

const uploadStorage = multer.diskStorage({
    destination:(req,res,callBack)=>{
        callBack(null,"/images")

    },
    filename : (req,res,callBack)=>{
        callBack(null,file.originalname);
    }


});

const upload = multer({storage:uploadStorage});






// user auth routes
app.use("/api/auth",authRouter);
//user routes
app.use("/api/users",userRoute);

// blog post routes


app.use("/api/posts",postRoute);

// category routes

app.use("/api/category",categoryRoute)

//upload 


app.post("/api/upload",upload.single("file"), (req,res)=>{
    console.log(req.file);
    res.send("file upload success");


});



const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
    connectDB();
})



