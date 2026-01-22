function List() {
    let items = ["Gaia", "Primordium", "Kuronami", "Prime", "Prelude to Chaos"];

  return (
    <div>
      <ul class="list-group">
        {items.map( (item) => (
          <li class="list-group-item" key={item}>{item}</li>))}
      </ul>
    </div>
  );
}
export default List