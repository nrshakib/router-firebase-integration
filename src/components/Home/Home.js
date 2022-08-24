import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Current User is: {user? user.displayName : "Incognito" }</h2>
        </div>
    );
};

export default Home;