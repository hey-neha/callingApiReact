import React, { useEffect, useState } from "react";

const Apis = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((resp) => {
        console.log("result", resp);
        setData(resp);
      });
    });
  }, []);

  return (
    <div>
      <h1>Get API Call</h1>
      <table border="1">
        <tr>
          <td>Id</td>

          <td>Title</td>

          <td>Price</td>

          <td>Description</td>
        </tr>
        {data.map((item) => 
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Apis;
