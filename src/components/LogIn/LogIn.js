import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const LogIn = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || "/";

    const handleGoogleSIgnIn = () =>{
        signInWithGoogle()
        .then(() =>{
            navigate(from, {replace: true});
        })
    }
    return (
        <div>
            <h3>Please Log In</h3>
            <div style={{margin: '20px'}}>
                <button onClick={handleGoogleSIgnIn}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Mail' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default LogIn;