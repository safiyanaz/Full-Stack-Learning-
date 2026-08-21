import { verifyToken } from "../utils/jwt.js";


export function authenticate(req, res, next){
    const authHeader = req.headers.authorization;
    if (!authHeader){
        return res.status(401).json({error: "No token provided."})
    }

    const token = authHeader.split(" ")[1]

    const verify = verifyToken(token);
    if (!verify){
        return res.status(401).json({error: "Invalid or expired token."})
    }

    req.user = verify;
    next();

}