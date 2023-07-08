import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/authors"
      )
      .then((res) => setData(res.data));
  });
  return (
    <table>
      <th>name</th>
      <th>id</th>
      {
        data.map((user)=>
          <tr>
            <td>{user.name}</td>
            <td>{user.id}</td>
            </tr>
        )
      }
      
    </table>
  )
};

export default App;
