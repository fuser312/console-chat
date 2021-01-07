// const app = require(express)();

const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3000

http.listen(port, () => console.log(`server listening on port : ${port}`))
io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log("user disconnected");
        io.emit("chatMessage", "disconnected")
    });




socket.on('chatMessage', (data) => {
     console.log(data.message )
    socket.broadcast.emit('chatMessage', data.message)
})

})

io.on('disconnect', (evt) => {
    console.log('disconnected')
})

