import React, { useContext } from 'react';
import { logout } from '../theme/firebase';
import { AuthContext } from '../theme/Root';

const Profile = () => {
    const { userAuth } = useContext(AuthContext)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col--10'>
                    <h1>Your Profile </h1>
                    <div className='row'>
                        <div className='col col--6'>
                            <form>
                                <input type='text' defaultValue={userAuth.email} className='inputs' />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col col--2'>
                    <button className='button button--danger button--block button--lg mybutton' onClick={() => logout(() => window.location.reload())}>Logout</button>
                </div>


            </div>

        </div>
    );
};

export default Profile;