import React, { useState, Component } from "react";
import {
  DataSheetGrid,
  checkboxColumn,
  textColumn
} from "react-datasheet-grid";


const Rgrid = props => {
  const printdata = () => {
    console.log(data);
  };
  let [data, setData] = useState(props.data);

  return (
    <>
      <DataSheetGrid
        data={data}
        onChange={setData}
        columns={[
          textColumn({ key: "firstName", title: "First name" }),
          textColumn({ key: "lastName", title: "Last name" }),
          textColumn({ key: "age", title: "Age" }),
          textColumn({ key: "number", title: "Number" }),
          textColumn({ key: "brand", title: "Brand" }),
          textColumn({ key: "role", title: "Role" }),
          textColumn({ key: "date", title: "Date" })
        ]}
      />
      <button onClick={printdata}>get Data</button>
    </>
  );
};

export default Rgrid;
