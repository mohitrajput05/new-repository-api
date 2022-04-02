const Category = require('../models/category.model')
const port = process.env.PORT||3000;

exports.addCategory=(request,response)=>{
    Category.create({
        name:request.body.name,
        image:"https://angular-api-new.herokuapp.com/images/"+request.file.filename,
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

exports.deleteCategory=(request,response)=>{
    Category.deleteOne({_id:request.body.cid})
    .then(result=>{
        return response.status(200).json({status:"success"});
    }).catch(error =>{
        console.log(error);
        return response.status(500).json({error:"went wrong"});
    })
}