import React, { useEffect, useState } from 'react'

export default function App2() {
    //states
    const[country,setCountry] = useState([]);
    const[stated,setState] = useState([]);
    const[city,setCity] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    



    //function states
    let getData = ()=>{
    try {
        fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json')
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log(res);
            setCountry(res);
            
        }).catch((err)=>{
            console.log(err);
        })

    } catch (error) {
        console.log(error)
        
    }
    }

    //get state change
    let getState = (id) => {
        console.log(id);
         var state = country.filter((a)=>{
            //  console.log("a",a)

            return a.id == id;

         })
         setState(state[0].states);
        //  console.log("first",state[0].states);

    }

    let getCity =(id)=>{
        console.log(stated)
        var state11 = stated.filter((a)=>{
            console.log("a",id)

           return a.id == id;

        })
        setCity(state11[0].cities);
        console.log("first",state11[0].cities);
      

    }
    //return statement
  return (
      <div>
          <label htmlFor="cars" >Choose a contry</label>
           <select onChange={(e)=>{getState(e.target.value)}}>
               {
                   country.map((cv,index,arr)=>{
                    //    console.log(cv)
                    // alert(cv.id)
                    return(
                         <option value={cv.id} >{cv.name}</option>
                    )
                   })
               }
           </select>
           <br />
           <br />
           <br />
           <br />
           <hr />   
           <label htmlFor="cars">Choose a state</label>
           <select  onChange={(e)=>{getCity(e.target.value)}}>
               {

                   stated.length > 0 &&
                   stated.map((cv,index,arr)=>{
                       
                    return(
                        <option value={cv.id}>{cv.name}</option>
                    )
                   })
               }
           </select>
           <br />
           <br />
           <br />
           <br />
           <hr />   
           <label htmlFor="cars">Choose a city</label>
           <select>
           {
                   city.map((cv,index,arr)=>{
                    //    console.log(cv)
                    return(
                        <option >{cv.name}</option>
                    )
                   })
               }
           </select>


      </div>
    
  )
}
