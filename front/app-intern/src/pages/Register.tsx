import { Link } from "react-router-dom";


const RegisterPage: React.FC = () => {


    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Welcom Back!</h2>
                <h2 className="text-2xl font-semibold mb-4 text-center">Registration</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="cpassword" id="c" name="cpassword" className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
                    </div>
                    <p className="mt-3 text-sm font-semibold">Already have an account? <Link to="/login" className="text-blue-500 underline">Sign In</Link></p>
                </form>
            </div>
        </div>
        
    );
}

export default RegisterPage;