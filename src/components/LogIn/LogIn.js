import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Log In</h3>
            <div style={{margin: '20px'}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
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