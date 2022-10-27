import * as React from 'react';
import {useEffect} from "react";
import './table2.css'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const rows: GridRowsProp = [
  {id:"1",SlNo: "1", Customer: "nhance", device:"sensor", Date:"2022-09-13T10:58:19",},
  {id:"2",SlNo: "1", Customer: "nhance", device:"sensor", Date:"2022-09-13T10:58:19",},
  {id:"3",SlNo: "1", Customer: "nhance", device:"sensor", Date:"2022-09-13T10:58:19", },
  {id:"3",SlNo: "1", Customer: "nhance", device:"sensor", Date:"2022-09-13T10:58:19", },
  {id:"3",SlNo: "1", Customer: "nhance", device:"sensor", Date:"2022-09-13T10:58:19", },
  {id:"3",SlNo: "1", Customer: "nhance", device:"sensor", Date:"2022-09-13T10:58:19", },
  {id:"3",SlNo: "1", Customer: "nhance", device:"sensor", Date:"2022-09-13T10:58:19",},
  {id:"3",SlNo: "1", Customer: "nhance", device:"sensor", Date:"2022-09-13T10:58:19", },
];

const columns: GridColDef[] = [
  { field: 'SlNo', headerName: 'Sl No', width: 150 ,},
  { field: 'Customer', headerName: 'Customer', width: 150 ,},
  { field: 'device', headerName: 'Device', width: 150 ,},
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

export default function App1() {
  return (
     <div className="App1">
       <p>Alerts Table</p>
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={4} sx={{m:1,boxShadow: 2,
    border: 3,
    borderColor: 'white',
    '& .MuiDataGrid-cell:hover': {
      color: 'teal',}}} />
    </div>
    </div>
  );
}
