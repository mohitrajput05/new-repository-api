const User = require('../models/user.model')
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
        return response.status(200).json(result);
    }).catch(error =>{
        return response.status(500).json(err);
    })
}