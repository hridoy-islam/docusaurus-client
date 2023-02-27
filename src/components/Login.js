import React from 'react';
import { signInWithEmail, signInWithGoogle } from '../theme/firebase';
import { useForm } from "react-hook-form";

const Login = ({ moveToSignup }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const {email, password} = data;
        signInWithEmail(email, password);
    };
    return (
        <div className="container text--center margin-top--lg margin-bottom--xs">
            <div className='row'>
                <div className="col col--4 col--offset-4">
                    <h1>Please Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" className='inputs' placeholder='Your Email' {...register("email")} />
                        <input type="password" className='inputs' placeholder='Your Password' {...register("password")} />
                        <button type='submit' className='button button--secondary button--lg button--block'>Login</button>

                    </form>

                    <button className="button button--primary button--block button--lg mybutton" onClick={signInWithGoogle}>Sign In With Google</button>
                    
                    <p className='text--center'>Don't Have Any Account? Please <a onClick={() => moveToSignup()}>Signup</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;