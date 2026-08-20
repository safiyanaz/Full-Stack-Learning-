import { verifyToken } from "../utils/jwt.js";
import { isBlacklisted } from "../utils/token-blacklist.js";

export default function authenticate(req,res,next){
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.includes("Bearer ")){
        return res.status(401).json({message : "No token provided"});
    }
    const token =  authHeader.split(" ")[1]

    if (isBlacklisted(token)){
        return res.status(401).json("Token has been invalidated. Log in again.")
    }

    const verify = verifyToken(token)
    if (!verify){
        return res.status(401).json({message: "Invalid or expired token"})
    }
    req.user = verify;
    next();
}