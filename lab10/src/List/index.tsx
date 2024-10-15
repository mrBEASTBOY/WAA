import Card from "../Card";
import Item from "../types/Item";

export default function List({
  items,
  error,
}: {
  items: Item[];
  error: string;
}) {
  return (
    <div className="row">
      {error === "" && items.map((item) => <Card key={item.id} item={item} />)}

      {error !== "" && <h1>{error}</h1>}
    </div>
  );
}
