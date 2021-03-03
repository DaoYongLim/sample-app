import React, { Component, useState, useEffect } from "react";
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

/*const api_url =
"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=20";
const fact = [];

async function GetAnimalFacts() {

  const [array, setArray] = useState([]);

  const response = await fetch(api_url);
  const data = await response.json();
  var i;
  var ids = data.map((e) => e.text);
  for (i = 0; i < ids.length; i++) {
    fact.push(createData(ids[i]));
  }
  console.log(fact);
  setArray(data); 
}
GetAnimalFacts();

function createData(facts) {
  return { facts };
}

class Api extends Component {
  render() {
    return (
      <div>
        <h1>Cat's Fact</h1>
        {<BasicTable factValues={fact} />}
      </div>
    );
  }
}*/

function Api() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [array, setArray] = useState([]);
  const fact = [];

  const fetchItems = async () => {
    const data = await fetch(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=20"
    );

    const facts = await data.json();
    var ids = facts.map((e) => e.text);
    for (var i = 0; i < ids.length; i++) {
      fact.push(createData(ids[i]));
    }
    console.log(fact);
    setArray(fact);
  };

  function createData(facts) {
    return { facts };
  }

  return (
    <div>
      <h1>Cat's Fact</h1>
      {<BasicTable factValues={array} />}
    </div>
  );
}

export default Api;
