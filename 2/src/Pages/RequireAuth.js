import React, {useContext} from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserLogin } from '../Context/userLogin'

const RequireAuth = (props) => {
    const { token, setToken } = useContext(UserLogin)
    const location = useLocation()

    return token? <>{props.children}</>:<Navigate to='/login' state={{from: location}} replace/>
}

export default RequireAuth;
