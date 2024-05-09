import { Link } from "react-router-dom";

const LoginPage = () => {
    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Welcom Back!</h2>
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                        
                        
                    </div>
                    <p className="mt-3 text-sm font-semibold">don't have anaccount? <Link to="/register" className="text-blue-500 underline">Sign Up</Link></p>
                </form>
            </div>
        </div>
        
    )
}

export default LoginPage;