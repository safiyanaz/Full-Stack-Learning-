import express from "express"; 
import bycrypt from "bcryptjs"

import { findByUsername } from "../utils/db.js";
import { signToken } from "../utils/jwt.js";

const router = express.Router();
export default router; 

router.post("/login", async (req, res) =>{
    const { username, password} = req.body;

    if (!username || !password){
        return res.status(400).json({error : "Username and passowrd required"})
    }

    const user = findByUsername(username);
    if(!user) {
        return res.status(401).json({error : "Invalid credentials."});
    }

    const match = await bycrypt.compare(password, user.passwordHash)
    if(!match){
        return res.status(401).json({error : "Invalid credentials."});
    }

    const token = signToken({id: user.id, role: user.role, username: user.username});

    res.status(200).json({token})

})