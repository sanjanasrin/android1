import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './calender.css';
import axios from 'axios';



function Calender1() {
 const [date, setDate] = useState(new Date());
 console.log(date)
axios.post("http://localhost:4000/posts",{
     date
  }).then((res)=> res.data)
 
 
return (
 <div className="app">
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date} selectRange={true}/>
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toLocaleDateString()}
     &nbsp; to &nbsp;
     <span>End:</span>{' '} {date[1].toLocaleDateString()}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toLocaleDateString()}
   </p>
        )}
 </div>
  )
}

export default Calender1;