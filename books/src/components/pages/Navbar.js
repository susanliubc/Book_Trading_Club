import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) = (
        <nav className="nav-wrapper teal ligthen-3">
            <div className="container">
                <Link className='brand-logo' to='/'>Favorite Books</Link>
                <ul className="right">
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink to='/newbook'>New Book</NavLink></li>
                </ul>
            </div>
        </nav>
);

export default withRouter(Navbar);