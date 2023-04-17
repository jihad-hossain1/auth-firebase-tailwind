import React, { useContext } from 'react';
import { AuthContexts } from '../Provider/AuthPorvider';

const Home = () => {
    const user = useContext(AuthContexts);

    return (
        <div>
            {/* Home ... {
                user && <span className='text-3xl font-semibold'>
                    {user.displayName}
                </span>
            } */}
        </div>
    );
};

export default Home;