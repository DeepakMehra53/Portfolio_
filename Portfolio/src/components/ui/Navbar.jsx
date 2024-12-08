export default function Navbar(){
    return(
        <>


        <header className="flex items-center justify-between px-6 py-4 bg-black shadow-md border-black rounded	">
            <div className="text-2xl font-bold text-gray-800">
                <a href="" className="hover:text-blue-600 transition"></a>
            </div>

            <nav>
                <ul className="flex space-x-8 text-gray-700">
                    <li><a href="" className="hover:text-blue-600 transition">Home</a></li>
                    <li><a href="" className="hover:text-blue-600 transition">About</a></li>
                    <li><a href="" className="hover:text-blue-600 transition">Projects</a></li>
                    <li><a href="" className="hover:text-blue-600 transition">Skills</a></li>
                    <li><a href="" className="hover:text-blue-600 transition">Experience</a></li>
                    <li><a href="" className="hover:text-blue-600 transition">Contact</a></li>
                </ul>
            </nav>
        </header>
            <div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Download Resume</button>
                <button></button>
            </div>
        </>
    )
} 