import React, { useEffect,useState} from 'react'
import {SquareLoader} from 'react-spinners'

const Succes = () => {
  const [Loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
      
    },2000);
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        Loading ?  <SquareLoader color="#c8ff3c" />:   <div>
    
      <h2 className='text-3xl font-semibold mb-4'>Order Successfully!✅</h2>
      <p>Your Order Has Been Successfully Placed 🥳</p>
    </div>
      }
   
    </div>
  )
}

export default Succes
