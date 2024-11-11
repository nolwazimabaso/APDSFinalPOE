import jwt from "jsonwebtoken"

const checkauth=(req,res,next) =>
{
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "this_serect_should_be _longer_than_it_is")
        next();
    }
    catch(error) {
        res.status(401).json({
            message: "Token invalid"
        });
    }
    
};

export default checkauth