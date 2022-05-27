import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

export default function (props) {
        //state
        

        //function
  
        // filter data
        function checkAdult1(d) {
            console.log("s",d)
            var todayunixtime = Math.floor(new Date().getTime() / 1000);
            var x = todayunixtime *1000;
            // console.log(x)
            // console.log()
            return d.arrives_at_utc > x ;
          }
          var upcoming = props.data.filter(checkAdult1);
        
  
  
  
      //return
  return (
    <>
     <h1>upcoming</h1>
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
                  upcoming.length > 0 &&
                  upcoming.map((cv,index,arr)=>{

                    
                   
                    //
                    const date = new Date(cv.arrives_at_utc);
                    const hours = date.getHours();
                    const minutes = "0" + date.getMinutes();
                    const formattedTime = `${hours}:${minutes.substr(-2)}`;
                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                    const year = date.getFullYear();
                    const Day = days[date.getDay()];
                    console.log(Day)
                    const month = months[date.getMonth()];
                    const dt = date.getDate();
                    const formatteddate = `${Day}-${year}-${month}- ${dt}`;



                  
  
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
    </>
  )
}
