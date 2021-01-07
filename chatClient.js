const io = require('socket.io');
var socket = require('socket.io-client')('http://localhost:3000');

  const readline = require("readline")


  var username = null
  let incomingMessage = [];

  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }
    
  )

  const clientLogIn = async(username) =>{
    r1.question("What is your name?", function(name){
      username = name
      console.log("Successfully connected to a server");

    });
     r1.addListener("line", (line) => {
      socket.emit("chatMessage", {
        message: `${username} says ${line}`,
      });

    })
    socket.on('connect', () => {
      })
    
  socket.on('disconnect', function() {
    });  
    
  
    
  socket.on('chatMessage', function (data)  {
        console.log((data));
    })
   
  
      while( socket.connected){
      socket.emit("chatMessage", {
        message: `${username} says : ${incomingMessage.shift()}`,
      })
    }
    
  
  }

  
  clientLogIn(username)