import React, { useState } from "react";
import "./App.css";
// import Search from "./component/search";
// import Country from "./component/Country";
import Card from "./component/card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [Data, setData] = useState([]);

  const [search, setSearch] = useState("");
  // const [PopInp, setPopInp] = useState("");
  React.useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  // console.log(Data);
  const Input = (e) => {
    setSearch(e.target.value);

    // console.log(e.target.value);
  };

  const Detail = Data.filter((cou) => {
    return cou.name.toLowerCase().includes(search.toLowerCase());
    // cou.population.toLowerCase().includes(search.toLowerCase())
  });
  // const Pop = (e) => {
  //   console.log(e.target.value);
  //   setPopInp(e.target.value);
  // };

  return (
    <div>
      <input
        type="text"
        name=""
        id="input"
        placeholder="Search...!"
        onChange={Input}
      />
      {/* <input type="number" id="input" placeholder="Population" onChange={Pop} /> */}
      <div>
        <div className="container flex ">
          <div className="row" id="row">
            {Detail.map((ele) => (
              <Card
                name1={ele.name}
                flag={ele.flag}
                pop={ele.population}
                cap={ele.capital}
                reg={ele.region}
                time={ele.timezones[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
