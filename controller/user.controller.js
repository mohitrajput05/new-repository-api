const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
exports.register=(request,response)=>{
    User.create({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    }).then(result=>{
        return response.status(200).json(result);
    }).catch(error =>{
        return response.status(500).json({err:"failed"});
    })
}
exports.login=(request,response)=>{
    User.findOne({
        email:request.body.email,
        password:request.body.password
    }).then(result=>{
        // let status;
        let payload= {subject:result._id}
        let token =jwt.sign(payload,'hjdjshfdhsjhf');
       return response.status(200).json({
           status: "Login success",
           currentuser:result,
           token:token
       });
    }).catch(error =>{
        return response.status(500).json(err);
    })
}