function Footer() {
    return (
        <footer className="bg-green-700 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mr-5 ml-5">
                <div className="md:col-span-2 lg:col-span-1">
                    <div>
                        <h2 className="text-lg font-bold mb-4">Create Class</h2>
                        <img src="#" alt="play_store" className="mb-2" />
                        <img src="#" alt="apple_store" />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-bold mb-4">Certified</h2>
                        <img src="#" alt="poto" />
                    </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                    <h2 className="text-lg font-bold mb-4">School</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div>
                            <p>India</p>
                            <p>Maharashtra</p>
                            <p>Bihar</p>
                            <p>Gujarat</p>
                            <p>Karnataka</p>
                            <p>Andhra Pradesh</p>
                            <p>Madhya Pradesh</p>
                        </div>
                        <div>
                            <p>West Bangala</p>
                            <p>Telangana</p>
                            <p>Uttara Pradesh</p>
                            <p>Tamil Nadu</p>
                            <p>Rajasthan</p>
                            <p>Kerala</p>
                            <p>Kid Store</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                    <h2 className="text-lg font-bold mb-4">Maths</h2>
                    <p>Number and Operation</p>
                    <p>Geometry</p>
                    <p>Logic and Patterns</p>
                    <p>Problem Solving</p>
                    <p>Measurement and Data</p>
                    <p>Attention and Memory</p>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                    <div>
                        <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                        <div className="flex gap-4">
                            <img src="#" alt="youtube" />
                            <img src="#" alt="youtube" />
                            <img src="#" alt="youtube" />
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <img src="" alt="" className="w-8 h-8" />
                        <div className="ml-2">
                            <p className="text-sm">2024-05-08 || 23:09</p>
                            <p className="text-sm">+94-775257232</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-8 ml-10 mr-10" />
            <div className="text-center mt-8">
                <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
