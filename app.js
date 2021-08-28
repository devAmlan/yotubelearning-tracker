const express = require('express')
const app = express()
require('dotenv').config();
const {getVideo} = require('./youtubeapi')
const ejs  = require('ejs')
let paramstring,videoid;
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true }));

app.get('/',(req,res)=>
{
 let errormessage = ''  
 res.render('index',{errormessage:errormessage})
})
app.post('/create',(req,res)=>
{
  function getParam()
  {
    paramstring = req.body.video.split('=')[1];
    videoid = "'"+paramstring+"'"
  }
   getParam();
   if( paramstring == undefined){
    let errormessage = 'you entered a wrong url'  
    res.render('index',{errormessage:errormessage})
   }
   else{
     try{
      getVideo(videoid)
     }
     catch(err){
      let errormessage = 'you entered a wrong url'  
      res.render('index',{errormessage:errormessage})
     }  
     res.render('end');
   }

})
app.listen(process.env.PORT,()=>
{
  console.log(`listening at ${process.env.PORT}`)
})