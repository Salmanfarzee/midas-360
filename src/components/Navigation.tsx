import { useState } from "react";

interface NavigationProps {
  scrolled: boolean;
  isHome: boolean;
}

const Navigation = ({ scrolled ,isHome}: NavigationProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="nav-text hidden md:flex flex space-x-6 self-center text-center px-4 py-2 rounded-md">
      <a
        href="/howitworks"
        className="hover:underline underline-offset-[6px] decoration-white"
      >
        How it works
      </a>
      <a
        href="/insights"
        className="hover:underline underline-offset-[6px] decoration-white"
      >
        Insights
      </a>

      {/* Nested Menu */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="hover:underline underline-offset-[6px] decoration-white flex items-center space-x-1"
        >
          <span>About Us</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-44 rounded-md z-10 transition-all duration-300 ${
            dropdownOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          } ${isHome && scrolled ? "bg-white shadow-md text-black" : isHome ? "bg-transparent text-white" : "bg-white shadow-md text-black"}`}
        >
          <a href="#" className="block px-4">
            News and Events
          </a>
          <a href="#" className="block px-4">
            Leadership
          </a>
        </div>
      </div>

      <a
        href="/contactus"
        className="hover:underline underline-offset-[6px] decoration-white"
      >
        Contact Us
      </a>
    </nav>
  );
};

export default Navigation;
