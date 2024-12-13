import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import mongoose from 'mongoose';

dotenv.config();
 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse JSON body
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});