export default function Button({ id, title, isClicked, clickHandler }) {
  const clickedBtnClassName = isClicked ? "btn-warning" : "btn-primary";

  return (
    <li key={id} onClick={() => clickHandler(id)} className="nav-item list-btn">
      <button className={"btn " + clickedBtnClassName}>{title}</button>
    </li>
  );
}
