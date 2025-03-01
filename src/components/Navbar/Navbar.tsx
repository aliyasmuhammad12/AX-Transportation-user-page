import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-black relative pt-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo with Radial Gradient */}
          <div className="relative w-[150px] sm:w-[200px] h-[200px] flex items-center">
            <div className="absolute w-[250px] sm:w-[300px] h-full left-[-50px] bg-[radial-gradient(circle,_#ffffff_0%,_rgba(255,255,255,0.3)_30%,_transparent_70%)]" />
            <img
              src="/assets/image 54.png"
              alt="AXT Transportation Logo"
              className="relative z-10 w-[120px] sm:w-[150px] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-20 text-sm text-gray-200 text-[20px]">
            {["Home", "Driver", "Dashboard", "Setting"].map((item, index) =>
              item === "Driver" ? (
                <a
                  key={index}
                  href="https://ax-transportation.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white hover:border-b-2 hover:border-[#FB8A00] transition-colors py-2"
                >
                  {item}
                </a>
              ) : (
                <NavLink
                  key={index}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-medium text-2xl font-poppins hover:text-white hover:border-b-2 border-black py-2 transition-colors"
                      : "text-gray-200 hover:text-white hover:border-b-2 hover:border-[#FB8A00] transition-colors py-2"
                  }
                >
                  {item}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center">
            <Button to="/login">Login</Button>
            <Button to="/sign-up" variant="secondary">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-[#FF6B00]"></span>
            <span className="block w-6 h-[2px] bg-[#FF6B00]"></span>
            <span className="block w-6 h-[2px] bg-[#FF6B00]"></span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 bottom-0 z-10 w-[75%] sm:w-[60%] bg-zinc-900 transform transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-4 w-8 h-8 flex items-center justify-center focus:outline-none"
            aria-label="Close menu"
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-[#FF6B00] transform -translate-y-1/2 rotate-45"></span>
              <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-[#FF6B00] transform -translate-y-1/2 -rotate-45"></span>
            </div>
          </button>

          {/* Mobile Menu Items */}
          <div className="flex flex-col h-full pt-20 pb-6 px-4">
            <nav className="flex flex-col space-y-4 text-gray-200">
              {["Home", "Driver", "Dashboard", "Setting"].map((item, index) => (
                <NavLink
                  key={index}
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-white hover:border-b-2 hover:border-[#FB8A00] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Buttons */}
            <div className="mt-auto flex flex-col space-y-2">
              <Button to="/sign-in">Login</Button>
              <Button to="/sign-up" variant="secondary">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[5] md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
