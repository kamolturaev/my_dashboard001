import React from "react";
// import Workbook from "react-excel-workbook";

const Eee = ({ filename, worksheets }) => {
  return (
    <div className="excel-export-container">
      {/* <Workbook
        filename={filename}
        element={
          <button className="download-excel-button">
            <span>Download</span>
            <img
              src={
                "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_excel-512.png"
              }
              alt=""
            />
          </button>
        }
      >
        {worksheets.map(({ name, columns, data }) => {
          return (
            <Workbook.Sheet name={name} data={data}>
              {columns.map(({ label, value }) => {
                return <Workbook.Column label={label} value={value} />;
              })}
            </Workbook.Sheet>
          );
        })}
      </Workbook> */}
    </div>
  );
};

export default Eee;

Eee.defaultProps = {
  filename: "",
  worksheets: []
};