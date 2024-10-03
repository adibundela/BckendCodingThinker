// let express = require('express');
// let app = express();

// // // let joke = require('give-me-a-joke');
// // // joke.getRandomDadJoke((data)=>{
// // //     console.log(data);
// // // })


// // //  ///////////////////         SERVER SIDE RENDERING                   ///////////////////////////////////////
// //         //  in this we share a file (template)  to browser

// app.set('view engine', 'ejs');

// app.use(express.static('public'))

// // // let arr =[1,2,3,4,4,4,5,5,5];
// // // app.get('/:data',(req,res)=>{
// // //     /////////////////////////////////////////////////

// // //     // let user = 'this is sent data user variable'
// // //     // res.render('index',{user});

// // //     ///////////////////////////////////////////////
// // //     console.log(req.params);
// // //     let {data} = req.params;

// // //     let newdata =arr.filter((item)=>{
// // //         return item==data;
// // //     })
// // //     res.render('index',{newdata})
// // // })


// // /////////////////   get vs post   //////////////////
// //      // http methods
// //     //  get ---> to fetch data    ----> data is in url  so this is not secure
// //     //  post ---> to send data    ----> data is in body

// // //  middleware for post request
// // app.use(express.urlencoded({extended:true}));    

// // // middeware for json data
// // app.use(express.json());

// // app.get('/',(req,res)=>{
// //     res.render('index');
// // })
// // app.get('/user',(req,res)=>{
// //     res.send('form submit ho gya');
// // })

// // /////////////// POST  //////////////////////////////////

// // app.post('/user', (req, res) => {
// //     // middleware use in line no. 39
// //     // use middleware to show req.body  cause initially req.body is undifined
    

// //     console.log(req.body);  // req.body is used to get the data sent from client side
    
// //     res.send('Form submitted successfully');
// // })



// //////           REST API            ///////////


// let comments = [{
//    id: 0,
//    username:'sam',
//    comment:'chitkara is a nice university'
// },{
//    id:1,
//    username:'g2',
//    comment:'chitkara is a popular university'
// },
// {
//    id:2,
//    username:'g3',
//    comment:'chitkara is a good university'
// }]

// app.get('/',(req,res)=>{
//     res.render('index',{comments})
// })





// app.listen(3000, ()=>{
//     console.log('server is running on port 3000');
// })



//      ###########    MONGO DB #########

// let e= require('express');
// let app = e();
// let mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/lnct').then(()=>{
//    console.log("mongo db chal gya");
// }).catch(()=>{
//    console.log('fas gya');
// });

// /////////////     DATA  server ----> Mongo Db    /////////////

//  let userSchema = mongoose.Schema({
//    name:{
//       type : String
//    },
//    email:{
//       type :String
//    },
//    password:{
//       type:String
//    }
//  })
//  let User = mongoose.model('User', userSchema);   ///  this is creation of collection model("collection name", schema)

//  let data = new User({name:"Rahul",email:"rahul@gmail.com",password:"1234ffh"})
//  data.save().then(()=>{
//     console.log('data saved successfully');
//  }).catch(()=>{
//     console.log('data not saved');
//  })
//   // now check on terminal 



// app.listen(3000, ()=>{
//     console.log('server is running on port 3000 jai siya ram');
// });

//  COMMANDS 

//  #1 --> mongosh

   // 1. show dbs
   // 2. use db_name --->  to change db or create db
   // 3. db.createcollection('collaction name')  ---> to create collection
   // 4. show collection ---> to show collection
   // 5. db.collection_name.drop()
   // 6. db.dropDatabase() ---> to drop db

   /// insert command
      //1. db.collection_name.insertOne({name: 'adi', imbs:7.7})

      //2. db.collection_name.insertMany([{name: 'aditya', imbs:7.8}, {name: 'aditya', imbs:7.9}]) --> in Array of objects


   // find command
      //1. db.collection_name.find({name: 'adi'})  ---> to find one record
      //2. db.collection_name.find()  ---> to find all records

   // update command
      //1. db.collection_name.updateOne({name: 'adi'}, {$set:{imbs: 7.8}})  ---> to update one record
      //2. db.collection_name.updateMany({imdb:7}, {$set:{imbs: 7.8,name:'sam'}})  ---> to update all records


   // delete command
      //1. db.collection_name.deleteOne({name: 'adi'})  ---> to delete one record
      //2. db.collection_name.deleteMany({imdb:7, })  ---> to delete all records

//      ###########    MONGODB #########



///////   ###########3##############   AUTHENTICATION OR AUTHENTICATION SYSTEM          ###############################3

// nodeomon start 

// let bcrypt = require('bcrypt');
// let jsonwebtoken = require('jsonwebtoken');
// const cors = require('cors');
// let express=   require('express')
// let app=   express()
// app.use(express.json())
// let mongoose=   require('mongoose')
// const User = require('./modal/user')
// app.use(cors())
// mongoose.connect('mongodb://localhost:27017/lnct').then(()=>{
//   console.log('db');
  
// }).catch((err)=>{
//   console.log(" connection error");
  
// })


// //  Sign Up Api
//     // to incript password ----> npm i bcrypt 
//     //    
//     app.post('/create', async(req,res)=>{
//       // console.log(req.body);
//       let {email,name,passWord}=req.body
//       let userData=req.body
//        let user=  await User.findOne({email})
//        if(user){
//          return res.send('user jinda hai')
//        }
//        else{
//           // res.send('hehehe')
//            let updatepassWord=    await  bcrypt.hash(userData.passWord,10)
//            console.log(updatepassWord); 
//           // let dbUser= new User({...req.body})
//           let dbUser=   new User({
//               name:userData.name,
//               email:userData.email,
//               passWord:updatepassWord
//              })
//            await  dbUser.save()
//           return res.send('account create ho gya heheh')
          
  
//        }
  
  
  
//     })

//    //  Login Api
//     app.post('/login', async(req,res)=>{
//        let {email,passWord}=req.body
//        let user=  await User.findOne({email})
//        if(!user){
//          return res.send('pahle account create kro')
//        }
//        else{
//          let isMatch=  await bcrypt.compare(passWord,user.passWord)
//          if(isMatch){
//             //  genrate token
//                // npm i jsonwebtoken
//                // jsonwebtoken.sign(user.email,random value)
//                let token  = await jsonwebtoken.sign({email:user.email},"JSSLFFSJFON");
//                console.log(token);

//           res.send(token)
//          }
//          else{
//             res.send('password galat nahi hai')
//          }
//        }
  
  
  
//     })
 
 // connect front end to backend 
   //At backend
      //  npm install cors
      //  const cors=require('cors')
      //  app.use(cors())
   // At front end
      //  npm install axios
      //  axios.post('http://localhost:5000/login',{email:'rahul@gmail.com',passWord:'1234ffh'})
      // .then((res)=>console.log(res.data))
      // .catch((err)=>console.log(err.response.data))
   // run frontend at a terminal
   // run backend at another terminal




 //                                         WEB SOCKET

      //  when we have to need real time communication 
      //  for ex->  chatting application

      //  server send response automatically to eevery connected users
      // server + websocket ==>  real time communication

      //  soket code in frontend (ejs,react)

      //  <!DOCTYPE html>
{/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2> Chat app</h2>
    <ul id = "massages"> </ul>
    <form id="form" action="">
        <input id="input" type="text">
    </form>
    <script src="/socket.io/socket.io.js"></script>
    <script>


        const socket = io();
        const massages = document.getElementById('massages');
        const form = document.getElementById('form');
        const input = document.getElementById('input');

        // to send massages
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            if(input.value.value){
            socket.emit('chat message',input.value);
            input.value='';
            }
        })

        // to receive massages
        socket.on('chat message',(msg)=>{
            const li = document.createElement('li');
            li.textContent = msg;
            massages.appendChild(li);
        })




    </script>
</body>
</html> */}



//  soket code in backend (node, express)

   // const express = require('express')
   // const {createServer} = require('http')
   // const {Server} = require('socket.io')
  
// app.listen(5000,()=>{
//   console.log('server chal gyaa');

// })


//



//                  MULTER     ///          

   // to transfer files and photos   

    // use in backend 
     // npm i multer 
     // const multer = require('multer')
     // const upload = multer({dest: 'uploads/'})
     // app.post('/upload', upload.single('file'), (req, res) => {
     //     res.send(`File uploaded successfully: ${req.file.originalname}`);
     // });