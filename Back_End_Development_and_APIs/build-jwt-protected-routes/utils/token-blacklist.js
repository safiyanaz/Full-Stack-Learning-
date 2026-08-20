

const blacklist = new Set()

export function blacklistToken(token){
    return blacklist.add(token)
}

export function isBlacklisted(token){
    if (blacklist.has(token)){
        return true
    }else{
        return false;
    }
}