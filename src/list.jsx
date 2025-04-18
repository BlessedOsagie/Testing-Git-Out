function List(props) {
  const categories = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; {item.calories}
    </li>
  ));

  return (
    <>
      {' '}
      <h3 className="list-category">{categories}</h3>
      <ol className="list-items">{listItems} </ol>{' '}
    </>
  );
}

export default List;
