const jwt = require('jsonwebtoken');

function verifies (req,res,next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send("Access Denied");

    try{
       const verified = jwt.verify(token, process.env.TOKEN_SECRET);
       req.user = verified; 
       next();
    }catch(err){
        res.status(400).send("Invalid token");
    }
};

function getRole (req,res,next) {
    const token = req.header('auth-token');
     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
     return verified;
}

module.exports = { verifies, getRole }