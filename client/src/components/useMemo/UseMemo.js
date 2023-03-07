import { useMemo, useState } from "react";
import List from "./List";

const users = [
  { id: "a", name: "Robin" },
  { id: "b", name: "Dennis" },
  { id: "c", name: "John" },
  { id: "d", name: "Victor" },
  { id: "e", name: "Jessica" },
];

const UseMemo = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const handleText = (event) => {
    setText(event.target.value);
  };
  const handleSearch = () => {
    setSearch(text);
  };
  //useMemo used for if a calculating paramters are same, it doesnt calculate again.
  const filteredSearchList = useMemo(
    () =>
      users.filter((user) => {
        console.log("Filter function is running ...");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText}></input>
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <List list={filteredSearchList}></List>
    </div>
  );
};

export default UseMemo;
