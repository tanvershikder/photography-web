import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLinks/CustomLink';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='d-flex justify-content-center'>
            <CustomLink to='/home' className='text-decoration-none mr-5'></CustomLink>
            <CustomLink to='/'> Home</CustomLink>
            <CustomLink to='/review'>Review</CustomLink>
            <CustomLink to='/dashbord'>DashBord</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>

        </div>
    );
};

export default Navbar;