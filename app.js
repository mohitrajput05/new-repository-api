const express  =require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT||3000;
const mongoose = require('mongoose');
const db ="mongodb+srv://Mohit_MongoDB:Mongo%40143214@cluster0.1m47d.mongodb.net/angular_backendApi?retryWrites=true&w=majority"
mongoose.connect(db,{ useNewUrlParser: true}).then(()=>{
    console.log("coneected");
})
.catch(err=>{
    console.log(err);
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const userRoute = require('./routes/user.route')
const categoryRoute = require('./routes/category.route');

app.use('/user',userRoute);
app.use('/category',categoryRoute)
app.use(express.static("./public"))




app.listen(port, () => {
    console.log('App listening on port 3000!');
});