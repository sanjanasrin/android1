import React,{useState, useEffect} from 'react'
import './table2.css'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios'


const columns = [
  { field: 'seatname', headerName: 'Sl No', width: 150 ,},
  { field: 'Company', headerName: 'Customer', width: 150 ,},
  { field: 'sensorid', headerName: 'Device', width: 150 ,},
  { field: 'Date', headerName: 'Date', width: 150 ,},
  {
    field: "view",
    headerName: "View",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Button onClick={onClick} variant="contained" style={{color:'white',backgroundColor:'teal'}}>View</Button>;
    }
  },
];

const DataTable= () =>{
  const [rowData, setRowData]= useState([])

  useEffect(() => {
    var apiurl="http://localhost:4000/firsttable";
    axios
      .get(apiurl)
      .then((response) => response.data)
      .then((data) => {
        setRowData(data);
      });
  }, []);
  

  return (
     <div className="App1">
       <p>Alerts Table</p>
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid getRowId={(row) => row._id} rows={rowData} columns={columns} pageSize={4} sx={{m:1,boxShadow:2,
    border: 3,
    borderColor: 'white',
    '& .MuiDataGrid-cell:hover': {
      color: 'teal',}}} />
    </div>
    </div>
  );
    }

export default DataTable
