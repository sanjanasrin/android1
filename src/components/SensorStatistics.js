import './SensorStatistics.css'
import pic from './images/sensible.png'
import pic1 from './logo/smart-devices.png'
import pic2 from './logo/sensor2.png'
import { GiWifiRouter } from "react-icons/gi";
import { GoAlert } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { BiChip } from "react-icons/bi";
import { IoWifi } from "react-icons/io";
import React,{useState, useEffect} from 'react'
import axios from 'axios'


function SensorStatistics() {
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

 
  const [rowData1, setRowData1]= useState([])
  
    useEffect(() => {
      var apiurl1="http://localhost:4000/getsok";
      axios
        .get(apiurl1)
        .then((response1) => response1.data)
        .then((data) => {
          setRowData1(data);
        });
    }, []);

    const [rowData2, setRowData2]= useState([])
  
    useEffect(() => {
      var apiurl2="http://localhost:4000/getsnoofdata";
      axios
        .get(apiurl2)
        .then((response2) => response2.data)
        .then((data) => {
          setRowData2(data);
        });
    }, []);

  
    return (
        <div>
        <div className="firstbar">
        <img src={pic} alt="1" width={170}/>
            <AiOutlineUser  style={{color: 'white', fontSize: '20px', marginLeft:'1300px'}}/>
            </div>

        
<div className="container">
  <div className="item1">
  <div className ="P">Sensor Statistics</div>
  <div className="D">
    <img src={pic1} alt="2" width={110} height={110}/>
    <div className="d">{rowData1.length}
    <div className="de">Total:{rowData2}</div>
    </div>
    </div>
  </div>



  <div className="item2">
  <div className ="P">Gateway Statistics</div>
  <div className="D">
  <img src={pic2} alt="2" width={110} height={110}/>
    <div className="d">10
    <div className="de">Total:10</div>
    </div>
    </div>
  </div>


  <div className="item3">
  <div className ="P">Alerts/Alert</div>
  <div className="D">
    <div className="mar">< GoAlert style={{color: 'white', fontSize: '70px'}} /></div>
    <div className="d">{rowData.length}
    </div>
    </div>
  </div>
</div>
</div>
);
}

export default SensorStatistics;