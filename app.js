import express from "express";
import mongoose from "mongoose"
import router from "./routes/user-routes"
import blogRouter from "./routes/blog-routes";


const port = process.env.PORT || 3000;
const app=express();
app.use(express.json())
app.use("/api/user" ,router)
app.use("/api/blog",blogRouter)


mongoose.connect('mongodb+srv://priyasingh:Priya@cluster0.kepu1bm.mongodb.net/Blog?retryWrites=true&w=majority'
).then(()=>{
    app.listen(port, ()=>{
        console.log(`connected to database and server is running at port no ${port}`);
    })
})
// app.listen(5000);
// app.listen(port, ()=>{
//     console.log(`server is running at port no ${port}`);
// })