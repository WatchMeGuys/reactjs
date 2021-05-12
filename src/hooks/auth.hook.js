import {useState,useEffect,useCallback} from 'react'

export function AuthHook(){ 
    const [token,setToken] = useState(null)
    const [userId,setUserId] = useState(null)

    const login = useCallback((jwtToken,id)=>{
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem('UserToken',JSON.stringify({token: jwtToken,userId:id}))

    },[])

    const logout = useCallback(()=>{
        setToken(null)
        setUserId(null)

        localStorage.removeItem('UserToken')
    },[])


    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('UserToken'))

        if(data && data.token){
            login(data.token,data.id)
        }
        console.log('use effect',data)
    },[login])

    return {login,logout,token,userId}
}