const cookieParser=require('cookie-parser');
const express=require('express');
const app=express();

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.cookie('name','Pratham Agrawal Bansal');
    res.send('done');
})
app.get('/read',(req,res)=>{
    console.log(req.cookies);
    res.send('read page');
})

app.listen(3000,()=>{
    console.log('server running on port 3000');
})