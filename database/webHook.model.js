const mongoose=require('mongoose');

const webHook=mongoose.Schema(
    {
        name:String,
        payload:Object,
        addedBy:String,
        sem:Number
    },
    {
        timestamps:true
    }
);

module.exports=mongoose.model('webHook',webHook);