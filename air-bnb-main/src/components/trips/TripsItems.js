import React from 'react'

const TripsItems = (props) => {
  
  return (
   <React.Fragment>
    <div className='cursor-pointer'>
     <div className='grid gap-2'>
    <img src={props.img} alt='' className='h-[15rem] w-[23rem] rounded-md'/>
    <p className='text-semibold text-gray-800 font-nun'>{props.name}</p>
    <p className='text-smibold text-gray-900 font-lato'>{props.title}</p>
    </div>
    </div>
    
    </React.Fragment>
  )
}

export default TripsItems