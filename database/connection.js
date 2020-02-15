const mongoose=require('mongoose');
const url="mongodb://webhook:webhook@139.59.5.96:27017/webhook";

mongoose.Promise=global.Promise;

module.exports=()=>
{
    return mongoose.connect(url,
        {
            useNewUrlParser:true
        }).then(()=>
        {
            console.log("database connected");
        }).catch(()=>
        {
            console.log("databse connection error");
            process.exit();
        });
}
