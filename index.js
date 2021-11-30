const express= require ('express');
const app= express();

app.use(express.json());
app.use(express.static('public'))
const day = new Date().getDay()
const hours= new Date().getHours()

const nhar= (req,res,next)=>{
    if (day==0 || day ==6 || hours< 9 || hours> 17){        
        return res.send("<h1>OUT OF WORKING</h1>")
    }
    next()
}

app.use(nhar)
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/homePage.html")
})

app.get('/contactus', (req,res)=>{
    res.sendFile(__dirname + "/contactUs.html")
})

app.get('/ourservice', (req,res)=>{
    res.sendFile(__dirname + "/ourService.html")
})


app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/style.css')
})


app.listen(5000,()=>{console.log(`Server is running on the port 5000`)})