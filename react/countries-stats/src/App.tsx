import React, { useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    async function getCountries() {
      const result = await axios.get("https://restcountries.com/v3.1/name/uk");
      const onlyCurrencies = result.data
        .filter((c: any) => c.currencies)
        .map((c: any) => c.currencies && Object.values(c.currencies));
      const flatCurrencies = onlyCurrencies.flat();
      //   console.log(flatCurrencies);
      const stats = flatCurrencies.reduce(
        (currObj: any, currentCurrency: any) => {
          const { name } = currentCurrency;
          if (currObj.hasOwnProperty(name)) {
            currObj[name] = currObj[name] + 1;
          } else {
            currObj[name] = 1;
          }
          return currObj;
        },
        {}
      );

      console.log(stats);
    }

    getCountries();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Countries Stats</h1>
      </header>
    </div>
  );
}

export default App;
