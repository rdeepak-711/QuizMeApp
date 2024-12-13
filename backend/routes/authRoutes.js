import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";

const router = express.Router();

// User Sign Up
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try{
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists"});
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save User
        const newUser = { username, password: hashedPassword };
        await newUser.save();
        res.status(201).json({message:`User ${username} registered`});
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error});
    }
});

// User Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        // Find the user
        const user = awaitUser.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password"});
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password"});
        }

        // Generate a JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET,{ expiresIn: '1h' });
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error});
    }
});

export default router;