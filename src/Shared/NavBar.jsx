import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const logOutHandler = () => {
        logOut()
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/all_toys'>All Toys</NavLink></li>
                        
                        {/* conditional link */}
                        {
                            user &&
                            <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/my_toys'>My Toys</NavLink></li>
                        }
                        {/* conditional link */}
                        {
                            user &&
                            <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/add_toy'>Add A Toy</NavLink></li>
                        }

                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Sports-Toys</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/all_toys'>All Toys</NavLink></li>

                    {/* conditional link */}
                    {
                        user &&
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/my_toys'>My Toys</NavLink></li>
                    }
                    {/* conditional link */}
                    {
                        user &&
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/add_toy'>Add A Toy</NavLink></li>
                    }

                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={logOutHandler} className="font-bold text-white hover:text-[#BAFF39] me-4">Log out</button>
                        :
                        <Link to='/login' onClick={logOutHandler} className="font-bold text-white hover:text-pr px-3">Log in</Link>
                }
                {user && <div className="avatar cursor-pointer" data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}>
                    <div className="w-12 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>}
            </div>
            <Tooltip place="left" id="my-tooltip" />
        </div>
    );
};

export default NavBar;