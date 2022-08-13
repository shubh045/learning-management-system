import React, { useEffect } from 'react'
import './Holiday.css'
import { useState } from "react";
import axios from "axios"


const Holiday = () => {

  const [state,setState]=useState({
    date:"",
    event:""
  })

  const [list,setList]=useState([])
  const [key,setKey]=useState("")
  const edit=(id)=>{
    setKey(id)
  }

 
  // <svg  className="symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>);
  

  const [errorMessage, setErrorMessage] = useState("")
  const [result, setResult] = useState("");



  const changeHandler = (event) => {
    const {name, value} = event.target;
    setState({
      ...state,
      [name]: value
    })
  } 

  const addHandler = async () => {
    try {
      setResult("")
      setErrorMessage("")
      const data = await axios.post("http://localhost:3100/holiday", {...state})
      console.log(data)
      if(!data.data.error) {
        setResult(data.data.message)
      } else {
        setErrorMessage(data.data.error)
      }
    } catch(error){
      console.log(error)
      setErrorMessage(error.error)
    }

    await axios.get('http://localhost:3100/holiday')
    .then( res => {
        setList(res.data)
    })
    .catch( err => console.log(err));
  }

  const fetchLlist = async () => {
    await axios
    .get("http://localhost:3100/holiday")
    .then((res) => {
      setList(res.data);
    })
    .catch((err) => console.log(err));
  }

  useEffect( () => {
    fetchLlist()
  }, []);


  const deleteHandler = async (id) => {
    
    await axios.delete("http://localhost:3100/holiday/"+id)
    .then(()=>{
      
      console.log("deleted")
    })
    .catch(
      err => console.log(err)
    )

    await axios.get('http://localhost:3100/holiday')
    .then( res => {
        setList(res.data)
    })
    .catch( err => console.log(err));
  }

    // const updateHandler = async () => {

    //   try {
    //     setResult("")
    //     setErrorMessage("")
    //     const data = await axios.put("http://localhost:3100/holiday"+key, {...state})
    //     console.log(data)
    //     if(!data.data.error) {
    //       setResult(data.data.message)
    //     } else {
    //       setErrorMessage(data.data.error)
    //     }
    //   } catch(error){
    //     console.log(error)
    //     setErrorMessage(error.error)
    //   }


    
  
    //   await axios.get('http://localhost:3100/holiday')
    //   .then( res => {
    //       setList(res.data)
    //   })
    //   .catch( err => console.log(err));
    //   }

  const [pop,setPop]=useState(false)
  const HandlePop=()=>{
    setPop(true)
  }
  const HandlePopc=()=>{
    setPop(false)
  }
  const [popu,setPopu]=useState(false)
  const HandlePopu=()=>{
    setPopu(true)
  }
  const HandlePopcu=()=>{
    setPopu(false)
  }

  return (
    <div className='holimain'>

          <button className='addbtn' onClick={HandlePop}>New Holiday</button>
          <div className="holisub">

          {pop?
              <div className='popup'>
                  <div className='holiadd'>
          
                  <input type="date" id="dte" placeholder='date' onChange={changeHandler} name="date" min="2022-08-12" max="2022-12-31"/>
                    
                  <input type="text" id="evnt" placeholder='Event' onChange={changeHandler} name="event" maxLength="30"></input>
                    
                  <a onClick={()=>{addHandler(); HandlePopc();}} className="addbtn p">Add</a>
                  <a className="addbtn p" onClick={HandlePopc}>Close</a>
                  
                  </div>
              </div>:""}
              {popu?
              // upForm.map(c=>{
              //   const {_id,date,event}=c;
              //   return(
              //     <>
                  <div className='popup'>
                  <div className='holiadd'>
          
                  <input type="date" id="dte" placeholder='date' onChange={changeHandler} name="date" min="2022-08-12" max="2022-12-31" />
                    
                  <input type="text" id="evnt" placeholder='Event' onChange={changeHandler} name="event" maxLength="30"></input>
                    
                  <a onClick={()=>{ addHandler(); HandlePopcu(); deleteHandler(key)}} className="addbtn p">Change</a>
                  <a className="addbtn p" onClick={HandlePopcu}>Close</a>
                  
                  </div>
                  </div>
                  // </>
              //   )
              // })
              :""}

          <table className='holilist'>
          <caption>List of Holidays</caption>
          
          <thead className='holilisth'>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Holiday Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className='holilistb'>
          {list.map(c=>{
            const {_id,date,event}=c;
            const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
            return(
              <>
         <tr key={_id}>
           <td>{date.substring(8,10) + "-" + date.substring(5,7) + "-" + date.substring(0,4)}</td>
           <td>{days[new Date(date).getDay()]}</td>
           <td>{event}</td>
           <td>
             <a onClick={()=> { HandlePopu(); edit(_id)}} className="c">Edit</a>
             &nbsp; &nbsp;&nbsp;&nbsp;
             <a onClick={()=>deleteHandler(_id)} className="c">Delete</a>
           </td>
         </tr>
              </>
            )
          })}


          </tbody>
        </table>
           
            </div>
          </div>

  )
}

export default Holiday
