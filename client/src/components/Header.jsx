import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    document.title = "Vihar360 | Real Estate";
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-blue-600"
        >
          <img
            src="/favicon-96x96.png"
            alt="Vihar360 Logo"
            className="w-12 h-12 object-contain mr-3"
          />
          <span className="text-gray-800">Vihar</span>
          <span className="text-blue-600">360</span>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex items-center border border-gray-300 rounded-lg px-3 py-1 bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500"
        >
          <input
            type="text"
            placeholder="Search for locality or landmark..."
            className="bg-transparent outline-none px-2 w-58 md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="text-gray-500" />
          </button>
        </form>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-black hover:text-blue-600 font-sans">
            Home
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-blue-600 font-sans"
          >
            About
          </Link>

          {/* Conditional Authentication Check */}
          {currentUser ? (
            <Link to="/profile">
              <img
                src={currentUser.avatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full border-2 border-blue-500"
              />
            </Link>
          ) : (
            <Link
              to="/sign-in"
              className="text-black hover:text-blue-600 font-md"
            >
              Sign In
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-blue-600 font-sans text-xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-blue-600 font-sans"
            >
              About
            </Link>

            {/* Conditional Authentication Check for Mobile Menu */}
            {currentUser ? (
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-blue-600 font-sans"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/sign-in"
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-blue-600 font-sans"
              >
                Sign In
              </Link>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
