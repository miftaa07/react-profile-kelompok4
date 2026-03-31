import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm px-6 py-3"
    >
      <div className="relative flex items-center justify-center">

        {/* MENU (tengah) */}
        <div className="flex gap-6">

          <Link
            to="/"
            className="relative text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </Link>

          <Link
            to="/miftakhul-dzakirah-asma"
            className="relative text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Mifta
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </Link>

          <Link
            to="/oribel-renata-geraldine"
            className="relative text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Oribel
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </Link>

          <Link
            to="/retno-ayu-agustina-utari"
            className="relative text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Retno
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </Link>

        </div>

        {/* DARK MODE BUTTON (kanan) */}
        <button
          onClick={() => setDark(!dark)}
          className="absolute right-2 md:right-4 px-3 py-1 rounded-lg 
          bg-gray-200 dark:bg-gray-700 
          text-gray-800 dark:text-white 
          hover:scale-105 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;