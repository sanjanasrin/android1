import SensorStatistics from './components/SensorStatistics';
import App1 from './components/table2/tablelist2';
import DataTable from './components/table2/table2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App3 from './components/graph/rap';
import Calender1 from './components/calender/calender.js';
import './App.css'
import DataFetc from './components/graph/dataFetc'

function App() {
  return (
    <div>
    <div>
      <SensorStatistics></SensorStatistics>
    </div>
    <div>
      <DataTable>
      </DataTable>
    </div>
    <div className="open">
    <div className="item11">
      <App3/>
    </div>
    <div className="item22">
      <Calender1></Calender1>
    </div>
    </div>
    <div>
      <DataFetc></DataFetc>
    </div>
    </div>
  );
}

export default App;
