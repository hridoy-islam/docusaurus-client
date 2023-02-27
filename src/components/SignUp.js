import React from 'react';
import { signInWithGoogle, signUpWithEmail } from '../theme/firebase';
import { useForm } from "react-hook-form";

const SignUp = ({ moveToLogin }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        signUpWithEmail(email, password);
    };
    return (
        <div className="container text--center margin-top--lg margin-bottom--xs">
            <div className='row'>
                <div className="col col--4 col--offset-4">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="email" className='inputs' placeholder='Your Email' {...register("email")} />
                        <input type="password" className='inputs' placeholder='Your Password' {...register("password")} />

                        <button type='submit' className='button button--secondary button--lg button--block'>Sign Up</button>

                    </form>

                    <button className="button button--primary button--block button--lg mybutton" onClick={signInWithGoogle}>Sign In With Google</button>
                    
                    <p className='text--center'>Already Have an Account? Please <a onClick={() => moveToLogin()}>Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;