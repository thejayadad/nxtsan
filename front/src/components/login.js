import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { client } from '../client';
import jwt_decode from "jwt-decode";


const clientId = "1026385553782-4qgikuq3ja4d901ne3cemjsckrihk5uv.apps.googleusercontent.com"
export function LoginButton(){
    const navigate = useNavigate();

    const onSuccess = (response) =>{
        const userObject = jwt_decode(response.credential);
        localStorage.setItem('user', JSON.stringify(userObject));
        const { name, sub, picture } = userObject;
        const doc = {
            _id: sub,
            _type: 'user',
            userName: name,
            image: picture,
          };
          client.createIfNotExists(doc).then(() => {
            navigate('/', { replace: true });
          });

    }

    const onFailure = (res) => {
        console.log("Login Failed")
    }
    return (
        <div id="signInButton">
            <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={onSuccess}
              onFailure={onFailure}
            />

        </div>
    )
}