import React from 'react';
import Country from "./Country";
import uuid from 'react-uuid'

const CountriesList = ({ country, isLoading }) => {
    return (
        <div>
            {country.map((country) => {
                return <Country key={uuid()} country={country} isLoading={isLoading} />
            })}
        </div>
    );
}

export default CountriesList;