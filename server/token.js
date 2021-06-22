
const toToken = (username, password)=>{
    return `${username}_XXXOOXXXX`;//for demo
}
const validateToken = (token)=>{
    console.log(token)
    if (!token) {
        return;
    }
    if (token.split("_")[1] === "XXXOOXXXX") { //for demo
        return token.split("_")[0];
    }
}
module.exports = {
    toToken,
    validateToken
}