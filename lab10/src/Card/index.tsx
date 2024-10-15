import Item from "../types/Item";

export default function Card({ item }: { item: Item }) {
  return (
    <div className="card">
      <a href={item.html_url} target="_blank">
        <img src={item.avatar_url} style={{ width: "100px" }} />
      </a>
      <p className="card-text">{item.login}</p>
    </div>
  );
}
