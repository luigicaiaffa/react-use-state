export default function Card({ id, title, description, isClicked }) {
  const clickedCardClassName = isClicked ? "" : "d-none";

  return (
    <div key={id} className={"card " + "mb-3 " + clickedCardClassName}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
