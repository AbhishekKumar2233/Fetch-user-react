import "./styles.css";
import React, { useEffect, useState } from "react";
import User from "./User";
import ReactLoading from "react-loading";

export default function App() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response) => Response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 1000);
  }, []);

  return (
    <div>
      <div className="header">
        <h2>User Data</h2>
      </div>
      {!done ? (
        <ReactLoading type={"spin"} color={"#ffc300"} height={10} width={10} />
      ) : (
        <div className="container">
          {data.map((user) => (
            <User
              name={user.name}
              email={user.email}
              number={user.phone}
              site={user.website}
            />
          ))}
        </div>
      )}
    </div>
  );
}
