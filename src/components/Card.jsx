export function Card({ name, image }) {
  return (
    <button className="card">
      <img src={image} alt={name} />
      <h2 className="card-label">{name}</h2>
    </button>
  );
}
