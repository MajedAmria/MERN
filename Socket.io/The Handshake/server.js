const express = require('express');
const app = express();
const cors= require('cors');
app.use(cors());
const server = app.listen(8000, () =>
console.log('The server is all fired up on port 8000')
);
const io = require('socket.io')(server, { cors: {origin:true,credentials:true} });

io.on("connection" ,socket=>{
    
        socket.emit("Welcome","Nice to meet you. (shake hand 2)")
    

})

