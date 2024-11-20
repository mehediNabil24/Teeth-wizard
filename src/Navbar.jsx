import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' flex items-center min-h-20 bg-blue-950 text-white'>
            <div className='w-11/12 mx-auto flex justify-between items-center '>

            <div>
                <h2 className='text-xl font-bold'>Teeth Wizard</h2>

            </div>
            <div className='space-x-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/treatment'}>All Treatments</NavLink>
                <NavLink to={'/appointment'}>My Appoinment</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div>
                <button className='btn btn-primary'>Login</button>
            </div>

            
        </div>
        </div>
    );
};

export default Navbar;