import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Tab,Tabs } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {

  //state/hooks
  const [data, setData] = useState([]);
   

  useEffect(()=>{
    getData(); 
  },[])

  //function  area
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

  data.sort(function(a, b){
     console.log("a",a)
    console.log("b",b)
    return a.arrives_at_utc - b.arrives_at_utc
  });
  // data.sort(function(a,b){
  //   //  console.log("a",a.arrives_at_utc)
  //   // // console.log("b",b)
  //   var todayunixtime = Math.floor(new Date().getTime() / 1000);
  //   console.log(todayunixtime*1000)
  //   // var x =a.arrives_at_utc < todayunixtime*1000
  //   // console.log("x",a.arrives_at_utc < todayunixtime*1000)
  //   // return x;
  //   if (a.arrives_at_utc||b.arrives_at_utc < todayunixtime*1000) {
  //     return a.arrives_at_utc;
      
  //   }
  // });

  
  
  
  console.log("data",data)

  //return statement
  return (
    <>
      <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="all" title="all">
          <Table striped bordered hover variant="dark">
              <thead>
                <tr >
                  <th>Date</th>
                  <th>Time</th>
                  <th>Order id</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.length > 0 &&                 
                  //map method     
                  data.map((cv,index,arr)=>{

                    //
                    const date = new Date(cv.arrives_at_utc);
                    const hours = date.getHours();
                    const minutes = "0" + date.getMinutes();
                    const formattedTime = `${hours}:${minutes.substr(-2)}`;
                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    const year = date.getFullYear();
                    // console.log(year)
                    const month = months[date.getMonth()];
                    const dt = date.getDate();
                    const formatteddate = `${year}-${month}-${dt}`;
                  
  
                    return(
                        <tr key={index}>
                          <td>{formatteddate}</td>
                          <td>{formattedTime}</td>
                          <td>{cv.order_id}</td>
                           <td>${cv.total_paid}</td>
                        </tr>
                    )

                  })
                }
              
              </tbody>
          </Table> 
        </Tab>
        <Tab eventKey="past" title="past">
          <h1>past orders</h1>
          <Table striped bordered hover  variant="dark">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Order id</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>

                {
                  data.map(function(cv){

                    return <tr>
                              <td>1@</td>
                              <td>mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                           </tr>
                  })
                }
                
                
              </tbody>
            </Table> 
        </Tab>
        <Tab eventKey="upcoming" title="upcoming">
          <h1>upcoming</h1> 
        </Tab> 
      </Tabs>
  
</>
  );
}

export default App;
