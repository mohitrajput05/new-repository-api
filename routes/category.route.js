const express = require('express');
const router = express.Router();
const multer = require('multer');
var storage = multer.diskStorage({
    destination:'public/images',
    filename:function(request,file,cb){
        cb(null , Date.now() + file.originalname);
    }
});
var upload=multer({storage: storage});
const categoryController = require('../controller/category.controller')

router.post('/add-category',upload.single('image'),categoryController.addCategory);
router.get('/category-list',categoryController.categoryList);
router.post('/delete-category',categoryController.deleteCategory);


module.exports = router;        