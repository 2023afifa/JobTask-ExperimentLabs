import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink =
        <>
            <li><NavLink className="mr-2" to="/">Home</NavLink></li>
            <li><NavLink className="mr-2" to="/items">Available Items</NavLink></li>
            <li><NavLink className="mr-2" to="/cart">My Cart</NavLink></li>
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
                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
                    <div className="flex-none navLink">
                        <ul className="menu menu-horizontal px-1 lg:text-lg font-medium space-x-5">
                            {navLink}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;