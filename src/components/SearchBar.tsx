import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search by name, roll number, church, gender, or rank"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-4 rounded-full border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-md transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default SearchBar;