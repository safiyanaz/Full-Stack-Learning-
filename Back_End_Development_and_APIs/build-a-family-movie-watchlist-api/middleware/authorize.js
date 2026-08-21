

export function authorizeModification(req, res, next) {
    const { role ,id } = req.user
    const { userId } = req.params

    const isParent = (role === "parent");
    const isOwnList = role === "child" && String(userId) === String(id);

    if (!isParent && !isOwnList) {
        return res.status(403).json({ error: "Access denied" })
    }    

    next();
    
}