import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alldata from './component/Alldata';
import PastData from './component/PastData';
import Upcoming from './component/Upcoming';
import { Tab, Tabs } from 'react-bootstrap';

function App() {
  return (
    <>
      <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="all" title="all">
          <Alldata />
        </Tab>
        <Tab eventKey="past" title="past">
          <PastData />  
        </Tab>
        <Tab eventKey="upcoming" title="upcoming">
          <Upcoming />
        </Tab> 
      </Tabs>
  
</>
  );
}

export default App;
