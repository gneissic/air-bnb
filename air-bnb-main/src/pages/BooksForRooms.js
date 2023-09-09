import React from 'react'
import BookingRequest from '../components/Bookings/BookingRequest'
import { json, useLoaderData, redirect } from 'react-router-dom'

const BooksForRooms = () => {
    const data = useLoaderData()
  return (
    <BookingRequest data={data} />
  )
}

export default BooksForRooms;
export async function loader({ params }) {
    const id = params.roomDetail;
    const response = await fetch(
      `https://air-bnb-e0098-default-rtdb.firebaseio.com/rooms/${id}.json`
    );
    if (!response.ok) {
      throw json({ message: "something went wrong" }, { status: 500 });
    } else {
      const data = await response.json();
      return data;
    }
  }

  export async function action({request, params}) {
    const data =  await request.formData()
    const userData = {
      cardNumber: data.get("card-number"),
      streetAdress: data.get("street-adress"),
      suiteNumber: data.get("suite-number"),
      city: data.get("city"),
      zipCode: data.get("zip-code"),
      state: data.get("state")
    }
    const response = await fetch("https://air-bnb-e0098-default-rtdb.firebaseio.com/userData/user.json", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    
    if (!response.ok) {
     throw json({message: "something went wrong, data not processed"}, {status:500})
    }
    return redirect("/")
    
  }
  