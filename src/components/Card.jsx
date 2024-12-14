import { useEffect, useState } from "react";

function constructURL(name) {
  return "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase() + "/";
}

export function Card(props) {
  let [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(constructURL(props.name), { method: "GET", mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.sprites.front_default);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [imageUrl]);

  return (
    <button
      onClick={() => {
        const name = props.name;
        props.setScore(props.score + 1);
        props.setClicked({ ...props.clicked, [name]: props.clicked[name] + 1 });
      }}
      className="card"
    >
      <img src={imageUrl} alt={props.name} />
      <h2 className="card-label">{props.name}</h2>
    </button>
  );
}
