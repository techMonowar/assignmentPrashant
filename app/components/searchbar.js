import { useState, useEffect } from 'react';
import { FaSearch, FaArrowLeft, FaUser, FaShoppingCart } from 'react-icons/fa';

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearchToggle = () => {
    if (isMobile) {
      setIsSearchOpen(!isSearchOpen);
    }
  };

  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div>
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </div>

        {/* Mobile Search Bar */}
        {isMobile && (
          <div className="flex-1">
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <>
                  <button
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={handleSearchToggle}
                  >
                    <FaArrowLeft />
                  </button>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-100 border border-gray-200 px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </>
              ) : (
                <button
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={handleSearchToggle}
                >
                  <FaSearch />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Desktop Search Bar */}
        {!isMobile && (
          <div className="flex items-center w-full">
            {/* Category Dropdown */}
            <select
              className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="All"
            >
              <option value="All">All</option>
              <option value="Upanishad">Upanishad</option>
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
              >
                <FaSearch />
              </button>
            </div>
          </div>
        )}

        {/* Login and Cart Button */}
        <div className="flex items-center space-x-4">
          {isMobile && (
            <button className="text-gray-500">
              <FaShoppingCart />
            </button>
          )}
          <button className="text-gray-500 flex items-center space-x-2">
            <FaUser />
            {!isMobile && <span>Login</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
