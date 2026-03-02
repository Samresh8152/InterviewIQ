import jwt from 'jsonwebtoken';
const isAuth = async (req,res,next) => {
    try {
        let {token} = req.cookies;

        if(!token){
            return res.status(401).json({message : "user dont have token"});
        }

        
        const verifytoken = jwt.verify(token, process.env.JWT_SECRET);
         if(!verifytoken){
            return res.status(401).json({message : "user dont have valid token"});
        }

        req.userId = verifytoken.userId;
        next();


    } catch (error) {
        return res.status(500).json({message : `Authentication Failed ${error} `});
    }
}

export default isAuth;