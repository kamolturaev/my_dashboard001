import React, { useState } from "react";
import ReactDOM from "react-dom";
import Eri from "./Eri";
import Eee from "./Eee";

import "./styles.css";

const Pv = () => {
  const [data, setData] = useState([]);

  const createRequests = () => {
    console.log(data);
  };

  const worksheets = [
    {
      name: "Requests",
      columns: [
        { label: "Full Name", value: "name" },
        { label: "Email", value: "email" },
        { label: "Template", value: "template" }
      ],
      data: [
        {
          name: "Bob Ross",
          email: "boss_ross@gmail.com",
          template: "Accounts Receivables"
        }
      ]
    }
  ];
  return (
    <div>
      <Eee filename="requests.xlsx" worksheets={worksheets} />
      <Eri uploadHandler={setData} />
      <button onClick={createRequests}>Create</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Pv/>, rootElement);

export default Pv;
