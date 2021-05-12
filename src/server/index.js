const express = require('express')
const app = express()
const authRouter = require('./routes/auth')

app.use(express.json({extended:true}))
app.use('/api/auth/',authRouter)

const PORT = 3005
function StartServer(){
    try{
        app.listen(PORT,()=>{
            console.log('Server started on port: ',PORT)
        })
    }catch(e){
        Console.log("Server start error: ",e.message)
    }
}
StartServer();