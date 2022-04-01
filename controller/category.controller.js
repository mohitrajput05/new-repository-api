const Category = require('../models/category.model')
exports.addCategory=(request,response)=>{
    console.log(request.body);
    Category.create({
        name:request.body.name,
        image:"http://localhost:3000/images/"+request.file.filename,
    }).then(result=>{
        return response.status(200).json(result);
    }).catch(error =>{
        return response.status(500).json(err);
    })
}
exports.categoryList=(request,response)=>{
    Category.find().then(result=>{
        return response.status(200).json(result);
    }).catch(error =>{
        return response.status(500).json(err);
    })
}