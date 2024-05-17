import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import "./App.css";
import ReactPaginate from "react-paginate";

const searchElements = [
  {
    id: 1,
    name: "Mountain",
  },
  {
    id: 2,
    name: "Flowers",
  },
  {
    id: 3,
    name: "Beaches",
  },
  {
    id: 4,
    name: "Cities",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [imagesData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const apiKey = "_en21j7lK1wdyr3ZtjYHCWMQH2A4GJayx0NJ01Bhm-4";

  const fetchData = async (search,page) => {
    const url = search
      ? `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${search}&page=${page}`
      : `https://api.unsplash.com/photos?client_id=${apiKey}&page=${page}`;
    console.log(search);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (search) {
        setIsLoading(false);
        setData(data.results);
      } else {
        setIsLoading(false);
        setData(data);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData(search,1);
    });
  }, [search]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData(search,1);
  };

  const changeSearchItem = (e) => {
    setSearch(e.target.value);
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1
    await fetchData(search,currentPage);
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
        {searchElements.map((eachSearchElement) => (
          <button
            className="search-element"
            onClick={changeSearchItem}
            value={eachSearchElement.name}
          >
            {eachSearchElement.name}
          </button>
        ))}
      </div>
      <h1>{search}</h1>
      <Gallery data={imagesData} isLoading={isLoading} />
      <ReactPaginate 
      previousLabel={'prev'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={1000}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      pageClassName={'list-item'}
      previousClassName={'list-item'}
      nextClassName={'list-item'}
      breakClassName={'list-item'}
      activeClassName={'active'}
      />
    </div>
  );
}

export default App;
