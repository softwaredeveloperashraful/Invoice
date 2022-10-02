import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import data from "./data";
import MyDocument from "./MyDocument";
const Invoice = () => {
  return (
    <PDFViewer style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <MyDocument data={data} />
    </PDFViewer>
  );
};

export default Invoice;
