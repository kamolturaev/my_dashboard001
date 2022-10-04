import React from "react";
import "./Appm.css";
import Rgrid from "./Rgrid";
import Gridd from "./Gridd";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
class Amain extends React.Component {
  state = {
    data: {},
    show: false
  };
  fileHandler = event => {
    let fileObj = event.target.files[0];
    console.log(fileObj);
    // just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resp.rows);
        this.setState({
          data: this.parseData(resp.rows),
          show: true
        });
      }
    });
  };

  parseData = data => {
    const newData = [];
    data.forEach(element => {
      const item = {
        firstName: element[1],
        lastName: element[2],
        age: element[3],
        number: element[4],
        brand: element[5],
        role: element[6],
        date: new Date(element[7])
      };
      newData.push(item);
    });
    return newData;
  };

  render() {
    return (
      <div>
        <h4>File Upload!</h4>
  
        <Gridd
          change={event => {
            this.fileHandler(event);
          }}
        />
        {this.state.show && <Rgrid data={this.state.data} />}
      </div>
    );
  }
}

export default Amain;
