const cookieParser=require('cookie-parser');
const express=require('express');
const app=express();

app.use(cookieParser());

const bcrypt=require('bcrypt');

app.get('/',(req,res)=>{
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("tusii@22", salt, function(err, hash) {
        console.log(salt);
       console.log(hash);
    });
});
})

// set up the cookie
// app.get('/',(req,res)=>{
//     res.cookie('name','Pratham Agrawal Bansal');
//     res.send('done');
// })
// read the cookie
// app.get('/read',(req,res)=>{
//     console.log(req.cookies);
//     res.send('read page');
// })

app.listen(3000,()=>{
    console.log('server running on port 3000');
})