import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import dns from "node:dns/promises";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";

dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();
//Middlewares
app.use(express.json());
app.use(cors());
//API Endpoints
app.get('/', (req, res) => {
    res.send("Hello World");
    
});
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

//Listener
app.listen(PORT, () => {
    console.log(`Server is running on port :`+PORT);
});
