import React, { useEffect, useState } from 'react';
import './App.css';
import CountryPicker from './CountryPicker'
import CoronavirusData from './CoronavirusData'


const BASE_URL = 'https://covid19.mathdro.id/api'

function App() {
  const [countriesOptions, setCountriesOptions] = useState([])
  const [firstCountry, setFirstCountry] = useState()
  const [countryConfirmed, setCountryConfirmed] = useState()
  const [countryRecovered, setCountryRecovered] = useState()
  const [countryDeaths, setCountryDeaths] = useState()

  useEffect(() => {
    fetch(`${BASE_URL}/countries`)
      .then(res => res.json())
      .then(data => {
        setCountriesOptions(data.countries.map(country => country.name).sort())
        setFirstCountry(data.countries[177].name)
      })
  }, [])

  useEffect(() => {
    if (firstCountry != null) {
      fetch(`${BASE_URL}/countries/${firstCountry}`)
        .then(res => res.json())
        .then(data => {
          setCountryConfirmed(data.confirmed.value)
          setCountryRecovered(data.recovered.value)
          setCountryDeaths(data.deaths.value)
        })
    }
  }, [firstCountry])

  return (
    <React.Fragment>
      <h1>Coronavirus Tracker</h1>
      <CountryPicker
        countriesOptions={countriesOptions}
        selectedCountry={firstCountry}
        onChangeCountry={e => setFirstCountry(e.target.value)}
      />
      <CoronavirusData
        confirmed={countryConfirmed}
        recovered={countryRecovered}
        deaths={countryDeaths}
      />
    </React.Fragment>
  );
}

export default App;
