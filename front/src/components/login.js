import { GoogleLogin } from '@react-oauth/google';

const clientId = "1026385553782-4qgikuq3ja4d901ne3cemjsckrihk5uv.apps.googleusercontent.com"
export function LoginButton(){
    const onSuccess = (res) =>{
        console.log("Login Successful")
    }

    const onFailure = (res) => {
        console.log("Login Failed")
    }
    return (
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
              onFailure={onFailure}
            />

        </div>
    )
}