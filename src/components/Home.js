import React, { useState, useEffect } from "react";
import CountriesList from "./CountriesList";
import SearchForm from "./SearchForm";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("USA");

  useEffect(() => {
    setIsLoading(true);
    const getCountries = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/name/${searchTerm}?fullText=true`
        );

        setCountry(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getCountries();
  }, [searchTerm]);
  console.log(country);
  return (
    <div>
      <SearchForm SetSearchTerm={SetSearchTerm} />
      <CountriesList country={country} isLoading={isLoading} />
    </div>
  );
};

export default Home;
