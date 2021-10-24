const Room =require('../backend/models/Room')


const io = require('socket.io')(8900,{
    cors:{
        origin:"http://localhost:3000"
    }
})

let users=[]
// let roomUsers=[]

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };

  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };

  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };

//   const addRoomUser=(newUser)=>{
//     let flag=roomUsers.find(user=>user.user_id===newUser.user_id&&user.user_id===newUser.user_id)

//     if(flag){
//         let error="User Exists";
//         return error;
//     }
//     else{
//     roomUsers.push(newUser);
    
//     return newUser;
// }}

// const removeRoomUser = (socket_id) => {
//     const index = roomUsers.findIndex(user => user.socket_id === socket_id);
//     if (index !== -1) {
//         return roomUsers.splice(index, 1)[0]
//     }
// }

// const getRoomUser = (socket_id) =>{ user1=roomUsers.find(user => user.socket_id === socket_id)

// return user1
// }

io.on("connection",(socket)=>{
    console.log("a user connected")


    socket.on("addUser", userId => {
    console.log(userId)    
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    console.log(user)
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });

//   Room.find().then(result => {
    
//     result?
//     socket.emit('output-rooms', result):
//     null
// }
// );

// socket.on('create-room', payload => {

//     const room = new Room({name:payload.name,password:payload.password})
//     room.save()
    
//     io.emit('room-created', room)
  
//  })

//  socket.on("join",payload=>{
//   let socket_id=socket.id;

//   const response=addRoomUser({
//       socket_id,
//       name:payload.user_name,
//       user_id:payload.user_id,
//       room_id:payload.room_id

//   })
//   socket.join(payload.room_id);
  
// })

// socket.on("sendRoomMessage",(message,room_id)=>{
//   let user=getUser(socket.id);

//   let test={user_id:user.user_id,room_id:user.room_id,text:message,user_name:user.user_name}

//   const newmessage=new Text({user_id:user.user_id,room_id:user.room_id,text:message,user_name:user.name});

//   newmessage.save().then(result=>io.to(room_id).emit("get-message",result));

// })
// socket.on("message-history",(room_id)=>{
//   Text.find({room_id}).then(result=>{
//       socket.emit("get-messages",result)
//   })

// })

// socket.on('disconnect',()=>{
//   console.log("disconneted")
//   removeRoomUser(socket.id)
// })


})
