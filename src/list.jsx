function List(props) {
  
  const itemList = props.items

  const listItems = itemList.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
