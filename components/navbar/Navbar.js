import Link from "next/link";

const Navbar = () => {

    const user = null

    return (
        <section>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/aboutUs">About us</Link></li>
                            <li><Link href="/contactUs">Contact us</Link></li>
                        </ul>
                    </div>
                    <Link href=" " className="btn btn-ghost normal-case text-xl"><span>Blog</span><span>Beast</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/aboutUs">About us</Link></li>
                        <li><Link href="/contactUs">Contact us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                        {
                            !user &&
                            <li><Link href="/signIn">Sign in</Link></li>
                        }
                        {
                            !user &&
                            <li><Link href="/signUp">Sign up</Link></li>
                        }
                        {
                            user &&
                            <li>
                                <button className="btn capitalize btn-secondary btn-sm py-1">
                                    Sign Out
                                </button>
                            </li>
                        }
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Navbar;