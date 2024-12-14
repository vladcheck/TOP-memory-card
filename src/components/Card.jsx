import { useEffect, useState } from "react";

function constructURL(name) {
  return "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase() + "/";
}

export function Card({ name }) {
  let [url, setUrl] = useState("");

  useEffect(() => {
    fetch(constructURL(name), { method: "GET", mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.sprites.front_default);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [url]);

  return (
    <button className="card">
      <img src={url} alt={name} />
      <h2 className="card-label">{name}</h2>
    </button>
  );
}
