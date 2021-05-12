import {createContext} from 'react'

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: null,
    logout: null,
    isAuth: false
})