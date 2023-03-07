import ListItem from "./ListItem";
const List = ({ list }) => {
  return (
    <ul>
      {list.map((user) => (
        <ListItem key={user.id} user={user}></ListItem>
      ))}
    </ul>
  );
};

export default List;
