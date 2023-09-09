import React from 'react'
import TripsItems from './TripsItems';
import BookingHeader from '../Bookings/BookingHeader';

const NewTrips = (props) => {
    const noTrips = props.data.length === 0
  return (
    <div>
        <BookingHeader/>
        {!noTrips && <div className='font-bold font-nun text-[3rem] ml-[2rem] mt-[2rem] pb-[1rem]'>Your Trips</div>}
    <div className='grid grid-cols-3 grid-rows-8 gap-2 ml-[2rem]'>
    {props.data.map((user)=>(<TripsItems price={user.price} name={user.name} id={user.id} key={user.id} title={user.title} img={user.img} />))}
        </div>
        {noTrips && <div className='text-center font-nun font-semibold text-lg mt-[3rem]'>No Trips yet</div>}
    </div>
  )
}

export default NewTrips