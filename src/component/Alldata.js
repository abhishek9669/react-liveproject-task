import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

export default function Alldata(props) {
    //state
   
    // function

    //return
  return (
      <>
       <div>Alldata</div>
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
                  props.data.length > 0 &&                 
                  //map method     
                  props.data.map((cv,index,arr)=>{
                    const date = new Date(cv.arrives_at_utc);
                    const hours = date.getHours();
                    const minutes = "0" + date.getMinutes();
                    const formattedTime = `${hours}:${minutes.substr(-2)}`;
                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    const year = date.getFullYear();
                    // console.log(year)
                    const month = months[date.getMonth()];
                    const dt = date.getDate();
                    const formatteddate = `${year}-${month}- ${dt}`;
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
