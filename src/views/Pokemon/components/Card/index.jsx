import "./style.css";

export default function Card(props) {
  const colors = {
    fire: "#FF4141",
    grass: "#5DF64E",
    electric: "#F3EA28",
    water: "#51C7FF",
    ground: "#F19D49",
    rock: "#D7D739",
    fairy: "#E237FF",
    poison: "#39DA5A",
    bug: "#FBBF6A",
    dragon: "#3554CB",
    psychic: "#D1D660",
    flying: "#F1E9E9",
    fighting: "#E9DEC8",
    normal: "#DBD9D9",
  };
  return (
    <div className="card" style={{ backgroundColor: colors[props.data.type] }}>
      <p className="card__id">{props.data.id}</p>
      <div className="imgContainer">
        <img src={props.data.img} alt={props.data.name} />
      </div>
      <p>{props.data.name}</p>
      <p>{props.data.type}</p>
    </div>
  );
}
