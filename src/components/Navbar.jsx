import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-[#1b1b1b] p-4 md:py-4 md:px-8 flex justify-between items-center shadow">
        <div className="text-xl md:text-2xl font-bold">
            <Link to="/">MovieFlix</Link>
        </div>
        <div className="flex gap-2 md:gap-6">
            <Link to="/" className="md:text-lg text-base p-2 md:py-2 md:px-4 rounded-sm transition-all duration-250 ease-in-out hover:bg-[rgba(255, 255, 255, 0.1)]">Home</Link>
            <Link to="/Favorites" className="md:text-lg text-base p-2 md:py-2 md:px-4 rounded-sm transition-all duration-250 ease-in-out hover:bg-[rgba(255, 255, 255, 0.1)]">Favorites</Link>
        </div>
    </nav>
  )
}

export default Navbar
