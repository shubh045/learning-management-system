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
      const data = await axios.post("http://localhost:3500/holiday", {...state})
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

    await axios.get('http://localhost:3500/holiday')
    .then( res => {
        setList(res.data)
    })
    .catch( err => console.log(err));
  }

  const fetchLlist = async () => {
    await axios
    .get("http://localhost:3500/holiday")
    .then((res) => {
      setList(res.data);
    })
    .catch((err) => console.log(err));
  }

  useEffect( () => {
    fetchLlist()
  }, []);


  const deleteHandler = async (id) => {
    
    await axios.delete("http://localhost:3500/holiday/"+id)
    .then(()=>{
      
      console.log("deleted")
    })
    .catch(
      err => console.log(err)
    )

    await axios.get('http://localhost:3500/holiday')
    .then( res => {
        setList(res.data)
    })
    .catch( err => console.log(err));
  }

    // const updateHandler = async () => {

    //   try {
    //     setResult("")
    //     setErrorMessage("")
    //     const data = await axios.put("http://localhost:3500/holiday"+key, {...state})
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


    
  
    //   await axios.get('http://localhost:3500/holiday')
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
          
                  <input type="date" id="dte" placeholder='date' onChange={changeHandler} name="date" min="2022-08-10" max="2022-12-31"/>
                    
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
          
                  <input type="date" id="dte" placeholder='date' onChange={changeHandler} name="date" min="2022-08-10" />
                    
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
              <th>Holiday Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className='holilistb'>
          {list.map(c=>{
            const {_id,date,event}=c;
            return(
              <>
         <tr key={_id}>
           <td>{date.substring(8) + "-" + date.substring(5,7) + "-" + date.substring(0,4)}</td>
           <td>{event}</td>
           <td>
             <a onClick={()=> { HandlePopu(); edit(_id)}}><svg  className="symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"/></svg></a>
             
             <a onClick={()=>deleteHandler(_id)}><svg  className="symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg></a>
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
