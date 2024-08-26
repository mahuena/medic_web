export const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <nav className="ml-10 space-x-5">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Services</a>
                    <a href="#" className="text-white">Contact</a>
                </nav>
            </div>
            <div className="flex items-center">
                <a href="#" className="text-white">Login</a>
                <a href="#" className="text-white bg-primary px-5 py-2 rounded-full">Register</a>
            </div>
        </div>
    )
}