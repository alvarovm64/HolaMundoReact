function List() {
  let items = [
    "Gaia",
    "Prelude to Chaos",
    "Prime",
    "RGX",
    "Forsaken",
    "Xerofang"
  ];

  return (

    <div>
      <ul class="list-group">
        {items.map((item) => (<li class="list-group-item" key={item}>{item}</li>))}
      </ul>
    </div>
  );
}

export default List;
