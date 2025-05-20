import React, { useState } from "react";
// import './App.scss';

const SearchBar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Qidirish so'rovi:", searchQuery);
    // Bu yerda submitning amali bajarilishi mumkin (masalan, qidiruv natijalari)
    setIsSearchActive(false); // Submit qilinganidan so'ng inputni yashirish
  };

  return (
    
      <div className="search">
        {!isSearchActive && (
          <button className="search-icon" onClick={handleSearchClick}>
            🔍
          </button>
        )}
        {isSearchActive && (
          <div className="search-modal">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Qidirish..."
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
   
  );
};

export default SearchBar;
