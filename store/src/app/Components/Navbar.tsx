"use client";

import { useState } from "react";
import { Search, ShoppingCart, CircleUserRound, Menu, X } from "lucide-react";
import Link from "next/link"; // Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar visibility
  const [searchResults, setSearchResults] = useState<{ name: string }[]>([]); // State for search results
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = () => {
    setIsSearchOpen(true);
    // Implement search logic here
    console.log("Searching for:", searchQuery);
    // Example products array
    const products = [
      { name: "Plant pots" },
      { name: "Ceramics" },
      { name: "Tables" },
      { name: "Chairs" },
      { name: "Crockery" },
      { name: "Tableware" },
      { name: "Cutlery" },
    ];
    // Filter products by name or tags
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className= "w-full h-auto bg-white">
      <div className=" w-full flex justify-center">
        <div className="md:w-full w-[1386px] h-[66px] drop-shadow-sm bg-white flex justify-between items-center px-4">
          <div className="flex items-center">
            {isSearchOpen && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            )}
            <Search
              className="w-4 h-4 text-gray-600 cursor-pointer ml-2"
              onClick={handleSearch}
            />
          </div>
          <h1 className="text-[24px] text-black md:text-center ">Avion</h1>
          <div className="flex items-center md:space-x-4">
            <Link href="/Cart"><ShoppingCart className="w-4 h-4 text-gray-600 hidden md:block" /></Link>
            <CircleUserRound className="w-4 h-4 text-gray-600 hidden md:block" />
            <button onClick={toggleMenu} className="block md:hidden">
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600 " />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 " />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[66px] justify-center items-center hidden md:flex ">
        <div
          className={`w-full md:w-[675px] text-[#726E8D]  ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-0">
            <li className="hover:text-gray-800 cursor-pointer">Plant pots</li>
            <li className="hover:text-gray-800 cursor-pointer">Ceramics</li>
            <li className="hover:text-gray-800 cursor-pointer">Tables</li>
            <li className="hover:text-gray-800 cursor-pointer">Chairs</li>
            <li className="hover:text-gray-800 cursor-pointer">Crockery</li>
            <li className="hover:text-gray-800 cursor-pointer">Tableware</li>
            <li className="hover:text-gray-800 cursor-pointer">Cutlery</li>
          </ul>
        </div>
      </div>
      {isSearchOpen && (
        <div className="w-full flex justify-center mt-4">
          <div className="md:w-full w-[1386px] bg-white p-4">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((product, index) => (
                  <li key={index} className="border-b py-2">{product.name}</li>
                ))}
              </ul>
            ) : (
              <p>Sorry, no products found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;