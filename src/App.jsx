import { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"]

  console.log(Users[0]["email"]);

  const search = (data) => {
    return data.filter(
        (item) => 
        keys.some((key=> item[key].toLowerCase().includes(query)))
    )
  }

  console.log(Users.filter((user) => user.first_name.includes("fe")));
  return (
    <div className="app">
      <input
        type="text"
        placeholder="search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
