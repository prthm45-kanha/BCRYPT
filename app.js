const cookieParser=require('cookie-parser');
const express=require('express');
const app=express();

app.use(cookieParser());
const bcrypt=require('bcrypt');

// hashing the password  encryption
// at a time only one will get executed either encryption or description
app.get('/',(req,res)=>{
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("tusii@22", salt, function(err, hash) {
        console.log(salt);
       console.log(hash);
    });
});
})

// comparing the password decryption
app.get('/',(req,res)=>{
    bcrypt.compare("tusii@22", "$2b$10$O5go6ESwgSZ1DniNlz76zeIfA/YiEFddkF57Y.Zm7SWPJZSFmEiwy", function(err, result) {
   console.log(result)
});
})


app.listen(3000,()=>{
    console.log('server running on port 3000');
})