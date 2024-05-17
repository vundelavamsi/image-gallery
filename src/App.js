import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const apiKey = "_en21j7lK1wdyr3ZtjYHCWMQH2A4GJayx0NJ01Bhm-4"

  const fetchData = (search) => {
    fetch(`https://api.unsplash.com/photos?client_id=${apiKey}`)
    .then((res) => res.json())
    .then((data) => setData(data))
  }
  useEffect(() => {
    fetchData();
  })

  const submitHandler = e => {
    e.preventDefault();
    fetchData(search);
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
        <button type="submit" className="search-button">Search</button>
      </form>
      <Gallery data={data} />
    </div>
  );
}

export default App;
