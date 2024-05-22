import { useState } from 'react';
import { FaSearch, FaArrowLeft, FaUser, FaShoppingCart } from 'react-icons/fa';

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="hidden md:block">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </div>
        {/* Search Bar */}
        <div className="flex items-center w-full md:w-auto">
          {/* Category Dropdown */}
          <select
            className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="All"
          >
            <option value="All">All</option>
            <option value="Upanshiad">Upanshiad</option>
            {/* Add more categories */}
          </select>
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={handleSearchToggle}
            >
              {isSearchOpen ? <FaArrowLeft /> : <FaSearch />}
            </button>
          </div>
        </div>
        {/* Login Button */}
        <button className="text-gray-500 flex items-center space-x-2">
          <FaUser />
          <span className="hidden md:block">Login</span>
        </button>
        {/* Cart Icon (Mobile Only) */}
        <div className="md:hidden">
          <FaShoppingCart className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
