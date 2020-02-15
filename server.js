const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('./database/connection');
const webhook=require('./database/webHook.model');
const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

mongoose().then(()=>
{
    console.log("connected");
}).catch(console.log);

app.get('/',(req,res)=>
{
    res.send("welcome...");
});

app.get('/api/webhook',(req,res)=>
{
    webhook.find().then((wh)=>
    {
        res.json({
            flag:true,
            data:wh,
            message:"successfully fetched"
        });

    }).catch(e=>{
        res.json({
            flag:false,
            data:null,
            message:e.message
        });
    })
});

app.post('/api/webhook',(req,res)=>
{
    let body=req.body;
    webhook.create(body).then((wh)=>
    {
        res.json({
            flag:true,
            data:wh,
            message:"successfully fetched"
        });

    }).catch(e=>{
        res.json({
            flag:false,
            data:null,
            message:e.message
        });
    })
});

app.put('/api/webhook/:id',(req,res)=>
{
    let body=req.body;
    webhook.findByIdAndUpdate(req.params.id, body).then((wh)=>
    {
        res.json({
            flag:true,
            data:wh,
            message:"successfully updated"
        });

    }).catch(e=>{
        res.json({
            flag:false,
            data:null,
            message:e.message
        });
    })

});

app.delete('/api/webhook/:id',(req,res)=>
{
    webhook.findByIdAndRemove(req.params.id).then((wh)=>
    {
        res.json({
            flag:true,
            data:wh,
            message:"successfully deleted"
        });

    }).catch(e=>{
        res.json({
            flag:false,
            data:null,
            message:e.message
        });
    })
})

app.listen(3000)
