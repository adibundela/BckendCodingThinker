let express = require('express');
 
let app = express();

// middile ware

app.use((req, res, next) => {
//    res.send('me beech ka dalal hu');
  next(); // this is varifing
}
)


///  path pera meter  

app.get('/r/:data', (req, res) => {
    let pathPerametar = req.params;
   res.send(pathPerametar.data);
   res.send('Hello it is my simple server');
})

// Query perameters ---> localhost:2000/search?name=adity&&age=20

app.get('/search', (req, res) => {

// search this in search bar-->http://localhost:2000/search?firstname=Nitesh&&lastname=kumar
    let {firstname , lastname  } = req.query;
    // let queryPerametar = req.query;
    // console.log(queryPerametar);
   res.send(`FirstName: ${firstname} and lastname: ${lastname}`);
})

app.listen(2000,()=>{
   console.log('server is running on port2000');
})