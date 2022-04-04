import React from 'react';
import { useLocation } from 'react-router-dom';
import CustomLink from '../CustomLinks/CustomLink';
import "./Navbar.css";


const Navbar = () => {
    const {pathname} = useLocation();
    return (
        <div className='d-flex justify-content-center'>
            <CustomLink to='/home'></CustomLink>
            <CustomLink to='/'> Home</CustomLink>
            <CustomLink to='/review'>Review</CustomLink>
            <CustomLink to='/dashbord'>DashBord</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </div>
    );
};

export default Navbar;