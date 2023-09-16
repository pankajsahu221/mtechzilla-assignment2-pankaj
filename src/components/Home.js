import { useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState({
    state: true,
    text: "",
  });

  // Handling Submit Functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${input}`);
      setUserData(response.data);
      setError({ state: false, text: "" });
    } catch (e) {
      setError({ state: true, text: "No User Found" });
    }
  };

  return (
    <div className="home">
      {/* Search Form */}
      <SearchForm
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
      />
      {/* Show Card or Error */}
      {!error.state ? <Card userData={userData} /> : error.text}
    </div>
  );
};

// Search Form
const SearchForm = ({ handleSubmit, input, setInput }) => {
  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search__form__inp"
        type="text"
        placeholder="Enter a username"
      />
      <button type="submit" className="search__form__btn">
        Search
      </button>
    </form>
  );
};

export default Home;
