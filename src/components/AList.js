import React from "react";

function AList(props) {
    const data = props.filteredData1.map((data, i) => <li key={i}> {data} </li>);
  
    return <div>{data}</div>;
  }
  
export default AList; 