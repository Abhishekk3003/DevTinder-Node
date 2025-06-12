const express = require('express');

const app = express();

const PORT =  3000;


// app.use("/",(req,res)=> {
//   res.send('Hello world')
// }) 
// any route which is start from this '/' this route handler is handle it



app.get('/user',(req,res)=>{
    res.send({firstName: 'John', lastName: 'Doe'});
});

app.post('/user',(req,res)=>{
    res.send('Hello user from server with post method')
});


app.use("/test", (req,res)=>{
    res.send('hello client/user from server')
})

// app.use((req,res)=>{
//     res.send('Hello, World!');
// })
// // if you want to handle all the request which is not handled by any route handler then you can use this

    

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});