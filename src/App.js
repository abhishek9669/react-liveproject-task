import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alldata from './component/Alldata';
import PastData from './component/PastData';
import Upcoming from './component/Upcoming';
import { Tab, Tabs } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {
   //state
   const [data, setData] = useState([]);

   useEffect(()=>{
       getData();
   },[])


   //function 
   let getData = ()=>{
       try {
         fetch('https://staging-api.dahmakan.com/test/orders')
         .then((response)=>{
           return response.json();
         }).then((res)=>{
          // console.log(res)
   
           console.log("res",res.orders)
           setData(res.orders);
         })
       } catch (error) {
         console.log(error) 
       }
     }

     //shorting data 
     data.sort(function(a, b){
       //  console.log("a",a)
       // console.log("b",b)
       return a.arrives_at_utc - b.arrives_at_utc ;
     });

  return (
    <>
      <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="all" title="all">
          <Alldata  data={data}/>
        </Tab>
        <Tab eventKey="past" title="past">
          <PastData data={data}/>  
        </Tab>
        <Tab eventKey="upcoming" title="upcoming">
          <Upcoming data={data}/>
        </Tab> 
      </Tabs>
  
</>
  );
}

export default App;
