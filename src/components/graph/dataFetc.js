import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetc1() {
    const [rowData, setRowData]= useState([])

  useEffect(() => {
    var apiurl="http://localhost:4000/yes";
    axios
      .get(apiurl)
      .then((response) => response.data)
      .then((data) => {
        setRowData(data);
      });
  }, []);
    return (
      <div>
  {console.log(rowData)}
  </div>
    );
}
export default DataFetc1


