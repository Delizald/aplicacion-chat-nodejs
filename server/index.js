var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hola-mundo',function(req,res){
    res.status(200).send("Hello world!");
});

var messages = [{
    id: 1,
    text: 'Welcome to this simple chat made with NodeJS and Socket.io!'
}];

io.on('connection',function(socket){
    console.log("Client with an IP of " + socket.handshake.address + " has connected.");
    socket.emit('messages',messages);

    socket.on('add-message',function(data){
        messages.push.data();
    });

    io.sockets.emit('messages',messages);
});

server.listen(8080,function(){
    console.log('Server working @ http://localhost:8080');
});

