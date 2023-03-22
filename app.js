const express = require('express')
const app = express();
const data = require('./data.js')
const ejsMate = require('ejs-mate')
const path = require('path')

app.engine('ejs', ejsMate)
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))








app.get('/',(req, res)=>{
    res.render('index', {data})
})
app.get('/video/:id',(req, res)=>{
    const vidId = req.params.id;
    const videos = data.videos;
    let video;
    for(let i=0;i<videos.length;i++){
        if(vidId==videos[i].id){
            video=videos[i]
        }
    }
    res.render('showVideo',{video, videos})
})
app.get('*',(req,res)=>{
    res.render('notFound')
})



app.listen(5000,()=>{
    console.log('The server is running on port 3000!')
})