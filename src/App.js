import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import "./App.css";

const searchElements = [
  {
    id: 1,
    name: "Mountain"
  },
  {
    id: 2,
    name: "Flowers"
  },
  {
    id: 3,
    name: "Beaches"
  },
  {
    id: 4,
    name: "Cities"
  }
]

console.log(searchElements)

function App() {
  const [search, setSearch] = useState("");
  const [imagesData, setData] = useState([]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const apiKey = "_en21j7lK1wdyr3ZtjYHCWMQH2A4GJayx0NJ01Bhm-4";

  const fetchData = async (search) => {
    const url = search
      ? `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${search}`
      : `https://api.unsplash.com/photos?client_id=${apiKey}`;
console.log(search);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (search) {
          setData(data.results);
        }
        else {
          setData(data);
        }
      } catch (error) {
        console.log("Error fetching data:",error);
      }
  };

  useEffect(() => {
    fetchData(search);
  }, [search]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData(search);
  };

  const changeSearchItem = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <h1 className="main-heading">Gallery Snapshot</h1>
      <form onSubmit={submitHandler} className="form-container">
        <input
          type="search"
          value={search}
          onChange={changeHandler}
          className="search-input"
          placeholder="Search Category"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="serch-elements-container">
        {searchElements.map((eachSearchElement) => 
          <button className="search-element" onClick={changeSearchItem} value={eachSearchElement.name}>{ eachSearchElement.name}</button>
        )}
      </div>
      <h1>{search}</h1>
      <Gallery data={imagesData} />
    </div>
  );
}

export default App;
