import React from 'react'
import { LoginButton } from '../components/login'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();

  return (
    <div>Login

    <LoginButton />
    </div>
  )
}

export default Login