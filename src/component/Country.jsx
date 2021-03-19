import React from "react";
import Card from "./component/card";

const Country = ({ data }) => {
  return (
    <div>
      <div className="container flex ">
        <div className="row" id="row">
          {data.map((ele) => (
            <Card name1={ele.name} flag={ele.flag} pop={ele.population} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Country;
