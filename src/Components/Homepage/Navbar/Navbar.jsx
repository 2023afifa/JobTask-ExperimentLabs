import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navLink =
        <>
            <li><NavLink className="mr-2" to="/">Home</NavLink></li>
            <li><NavLink className="mr-2" to="/items">All Items</NavLink></li>
            <li><NavLink className="mr-2" to="/carts">My Cart</NavLink></li>
        </>

    return (
        <div>
            <div className="navbar bg-slate-50">
                <div className="md:navbar-start">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold">HomeLuxe</h2>
                    </div>
                </div>
                <div className="md:hidden flex flex-grow justify-end">
                    <div className="dropdown navLink">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content right-3 z-[1] p-1 shadow bg-base-100 rounded-box w-28">
                            {navLink}
                        </ul>
                        {
                            user ?
                                <>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-8 md:w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                    <button onClick={handleLogout} className="bg-transparent border-none text-lg p-1">Log Out</button>
                                </>
                                : <Link to="/login"><button className="btn bg-transparent border-none text-lg">Login</button></Link>
                        }
                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
                    <div className="flex-none navLink">
                        <ul className="menu menu-horizontal px-1 lg:text-lg font-medium space-x-5">
                            {navLink}
                        </ul>
                    </div>
                    {
                        user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-8 md:w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <button onClick={handleLogout} className="bg-transparent border-none text-lg p-1">Log Out</button>
                            </>
                            : <Link to="/login"><button className="btn bg-transparent border-none text-lg">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;