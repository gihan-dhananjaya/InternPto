import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="fixed top-0 z-10 w-full bg-white shadow-lg">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center flex-col sm:flex-row">
                <div className="flex items-center gap-3">
                    <Link to='/' className="mr-5 flex items-center">
                        <img src="" alt="" className="w-8 h-8" />
                        <p className="ml-2">Create Class</p>
                    </Link>

                    <Link to='/about' className="border-2 rounded-lg border-green-500 py-2 px-4">About</Link>
                    <Link to='/maths' className="border-2 rounded-lg border-green-500 py-2 px-4">Maths</Link>

                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center">
                        <img src="" alt="" className="w-8 h-8" />
                        <div className="ml-2">
                            <p className="text-sm">2024-05-08 || 23:09</p>
                            <p className="text-sm">+94-775257232</p>
                        </div>
                    </div>
                    <Link to='/login' className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
