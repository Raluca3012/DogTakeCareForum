import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dog.css";

const ShowDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    const response = await fetch("http://localhost:8081/dogs/");
    const data = await response.json();
    setDogs(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredDogs = dogs.filter((dog) =>
    dog.breed.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="dog">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by breed"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      {filteredDogs.length > 0 && (
        <ul className="dogs-list">
          {filteredDogs.map((dog) => (
            <li key={dog.id} className="dog-item">
              <div className="dog-info">
                <span className="dog-breed">{dog.breed}</span>
                <Link to={`/viewDetails?breed=${dog.breed}`} className="view-more-btn">
                  View More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowDogs;