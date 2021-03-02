import React, { Component, useState } from "react";
import BasicTable from "./table";

/*const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    //console.log(data.latitude);
    //console.log(data.longitude);
    const { latitude, longitude } = data;
    console.log(data.latitude);
    console.log(data.longitude);
    
    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
}
getISS();*/

class Api extends Component {
  render() {
    const api_url =
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=20";
    const fact = [];

    async function getAnimalFacts() {
      const response = await fetch(api_url);
      const data = await response.json();
      var i;
      var ids = data.map((e) => e.text);
      for (i = 0; i < ids.length; i++) {
        fact.push(createData(ids[i]));
      }
      console.log(fact);
    }
    getAnimalFacts();

    function createData(facts) {
      return { facts };
    }

    /*function Example(fact) {
      // Declare a new state variable, which we'll call "count"
      const [stateFacts, fact] = useState(0);

      return (
        <div>
          <p>{<BasicTable factValue={fact} />}</p>
        </div>
      );
    }
    Example();*/

    return (
      <div>
        <h1>Cat's Fact</h1>
        {<BasicTable factValue={fact} />}
      </div>
    );
  }
}

export default Api;
