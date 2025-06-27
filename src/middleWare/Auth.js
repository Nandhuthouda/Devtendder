 const adminAuth = (req, res, next) => {
    const token = "nandhu";
    const isValid = token === "nandhu";
    if(!isValid){
        res.status(401).send("Unauthorized request");
    }else{
        next();
    }
};


 const userAuth = (req, res, next) => {
    const token = "nandhu";
    const isValid = token === "nandhu";
    if(!isValid){
        res.status(401).send("Unauthorized request");
    }else{
        next();
    }
};

module.exports = { adminAuth, userAuth };