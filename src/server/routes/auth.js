const {Router} = require('express')
const router = Router()
const jwt = require('jsonwebtoken')


const jwtSecret = "testReactApp"
const users =[
    {id:1,email:"1@mail.ru",password: "123456",userName: "Igor"},
    {id:2,email:"2@mail.ru",password: "123456",userName: "Ivan"},
    {id:3,email:"3@mail.ru",password: "123456",userName: "Misha"},
    {id:4,email:"4@mail.ru",password: "123456",userName: "Oleg"},
    {id:5,email:"5@mail.ru",password: "123456",userName: "Petr"},
]
router.post('/login',(req,res)=>{

    try{
        const {email,password} = req.body
        let findedUser = users.find(user=> user.email == email && user.password == password )

        if(!findedUser){
            res.status(400).json("User not found")
        }

        let token = jwt.sign(
            {userId: findedUser.id},
            jwtSecret,
            {expiresIn: '1h'}
        )

        res.status(200).json({token, userInfo: findedUser})

    }catch(e){
        res.status(400).json("Login hander on server filed")
    }

})

module.exports = router;