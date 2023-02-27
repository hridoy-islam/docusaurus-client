import Layout from '@theme/Layout';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../theme/Root';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Loading from '../theme/Loading';
import SignUp from '../components/SignUp';


const Account = () => {
    const {userAuth, authLoading} = useContext(AuthContext)
    const [signup, setSignup] = useState(false)
    const [login, setLogin] = useState(false);


    const moveToLogin = () => {
        setLogin(true)
        setSignup(false);
    }

    const moveToSignup = () => {
        setSignup(true);
        setLogin(false);
    }


    let content;
    
    if(authLoading){
        content = <><Loading /></>
    }
    else if(userAuth?.uid){
        content = <>
        <Profile />
        </>
    }
    else if(signup){
        content = <>
        <SignUp moveToLogin={moveToLogin}/>
        </>
    }
    else {
        content = <>
        <Login moveToSignup={moveToSignup}/>
        </>
    }
    return (
        <Layout>
            {content}
            
        </Layout>
    );
};

export default Account;