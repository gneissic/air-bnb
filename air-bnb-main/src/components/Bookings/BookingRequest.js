import React, { useState } from 'react'

import BookingHeader from './BookingHeader';
import { BsChevronLeft } from 'react-icons/bs'
import { CiCreditCard1 } from 'react-icons/ci'
import { FcAlarmClock } from 'react-icons/fc'
import { BiLogoVisa } from 'react-icons/bi'
import { GrAmex } from 'react-icons/gr'
import { SiDiscover } from 'react-icons/si'
import { FaCcPaypal } from 'react-icons/fa'
import { SiGooglepay } from 'react-icons/si'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Form, json } from 'react-router-dom';
import { tripActions } from '../../store/trips-slice';

const BookingRequest = (props) => {
    const [cardNumber, setCardNumber] = useState("")
    const [cardIsTouched, setCardIsTouched] = useState(false)
    const [streetNumber, setStreetNumber] = useState("")
    const [streetNumberIsTouched, setStreetNumberIsTouched] = useState(false)
    const [suiteNumber, setSuiteNumber] = useState("")
    const [suiteIsTouched, setSuitIsTouched] = useState(false)
    const [city, setCity] = useState("")
    const [cityIsTouched, setCityIsTouched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const cityIsValid = city.length !=="" 
    const citiyIsInValid = !cityIsValid && cityIsTouched
    const cardNumberIsValid = cardNumber.length === 16
    const cardNumberIsInvalid = !cardNumberIsValid && cardIsTouched
    const streetNumberIsValid = streetNumber.length > 4
    const suiteNumberIsValid = suiteNumber.length === 2 || suiteNumber.length === 3
    const suiteNumberIsInValid = !suiteNumberIsValid && suiteIsTouched
    const streetNumberIsInvalid = !streetNumberIsValid && streetNumberIsTouched
    const totalFee = useSelector((state)=> state.bookings.items[0].totalFee)
  const airbnbFee = useSelector((state)=> state.bookings.items[0].airbnbFee)
  const weeklyStayDiscount = useSelector((state)=> state.bookings.items[0].weeklyStayDiscount)
  const nightSpent = useSelector((state)=> state.bookings.items[0].nightSpent)
  const noOfDays = useSelector((state)=> state.bookings.items[0].noOfDays)
  
    const {img, title, name, price, id} = props.data
    const dispatch =  useDispatch()


const setCardNumberHandler=(e)=>{
    
    setCardNumber(e.target.value)
}
const onBlurCardNumberHandler=()=>{
    setCardIsTouched(true)
}
const setStreetNumberHandler=(e)=>{
    
    setStreetNumber(e.target.value)
}
const onBlurStreetNumberHandler=()=>{
    setStreetNumberIsTouched(true)
}
const setSuiteHandler=(e)=>{
    
    setSuiteNumber(e.target.value)
}
const onBlurSuiteHandler=()=>{
    setSuitIsTouched(true)
}
const setCityHandler=(e)=>{
    
    setCity(e.target.value)
}
const onBlurCityHandler=()=>{
    setCityIsTouched(true)
}
   const userInfo ={
        name: name, 
        title: title,
        img:img,
        price: price,
        id: id,
    }
    const sendUserDetails = async()=>{
        setIsLoading(true)
        dispatch(tripActions.onAddTrips({name:name, title:title, img:img, price:price, id:id}))
        const response = await fetch("https://air-bnb-e0098-default-rtdb.firebaseio.com/userDetails.json", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        setIsLoading(false)
        if (!response.ok) {
            throw json({message: "something went wrong"}, {status:500})
        }
    }


const inputsInValid = streetNumberIsInvalid || suiteNumberIsInValid || citiyIsInValid



  return (
    <div className='font-nun'>
        <BookingHeader/>
        <div className='flex gap-[7rem] '>
     <Form method='Post' onSubmit={sendUserDetails}>
    <div className='w-[39%] ml-[3rem] mt-[3rem]'>
            <div className='flex items-center gap-3 mb-[1.5rem]'>
                <div><BsChevronLeft  className='h-4 w-4 text-black font-bold' /></div>
                <h1 className='text-2xl font-bold text-black'>Request to book</h1>
            </div>
            <div className='border-b border-[#e9ebe1] pb-4'>
            <div className='grid gap-y-4'>
                <div className='font-bold text-black text-lg'>
                    <h2>Your trip</h2>
                </div>
                <div className='flex justify-between'>
                    <div>
                    <h2 className='text-black font-bold'>Dates</h2>
                    <p>Aug 21-28</p>
                    </div>
                    <p className='underline'>Edit</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                    <h2 className='text-black font-bold'>Guests</h2>
                    <p>1 guest</p>
                    </div>
                    <p className='underline'>Edit</p>
                </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between'>
                <div className='py-3'>
                    <h2>Pay with</h2>
                </div>
                <div className='flex justify-center gap-3'>
                    <BiLogoVisa className='w-8 h-8 text-[#ed1334]'/>
                    <GrAmex  className='w-8 h-8 text-[#0ee611]' />
                    <SiDiscover className='w-8 h-8 text-[#e6d70e]'/>
                    <FaCcPaypal  className='w-8 h-8 text-[#ed1334]' />
                    <SiGooglepay  className='w-8 h-8 text-[#e6320e]' />
                </div>
                </div>
                
                <div>
                   <div className='flex gap-2 items-center border rounded-md border-[#b7b8ae] py-3 pl-2'>
                    <CiCreditCard1  className='h-7 w-7 text-[#b7b8ae]' />
                    <p>Credit or debit card</p>
                    </div> 
                    <div className="mt-[1rem]" >
                        <input name='card-number' value={cardNumber} onBlur={onBlurCardNumberHandler} onChange={setCardNumberHandler} placeholder='Card number' className={`w-full border rounded-md border-[#b7b8ae] py-3 pl-2 ${cardNumberIsInvalid ? "border rounded-md  border-red-700 text-red-700 outline-red-700" : ""}`} />
                    </div>
                    { cardNumberIsInvalid  && <div className='flex gap-x-2 items-center text-red-700 font-semibold font-nun '><AiOutlineExclamationCircle/>
                    <p className='text-sm'>Check your card number</p>
                    </div>}
                    <div>
                        <div className='mt-5'>
                            <h1>Billing address</h1>
                        </div>
                        <div className={`  ${inputsInValid ? "border-red-700 border rounded-md" : "border border-[#585850] rounded-md"}`}>
                            <input name='street-adress'  placeholder='Street adress' onChange={setStreetNumberHandler} onBlur={onBlurStreetNumberHandler}  className={`w-full border-b border-[#b7b8ae] py-3 pl-2 ${streetNumberIsInvalid ? "border rounded-md  border-red-700 text-red-700 outline-red-700" : ""}`} />
                            <input  name='suite-number' placeholder='Apt or suite number' onChange={setSuiteHandler} onBlur={onBlurSuiteHandler} className={`w-full border-b border-[#b7b8ae] py-3 pl-2 ${suiteNumberIsInValid ? "border rounded-md  border-red-700 text-red-700 outline-red-700" : ""}`} />
                            <input name='city' placeholder='city'  onChange={setCityHandler} onBlur={onBlurCityHandler} className={`w-full border-b border-[#b7b8ae] py-3 pl-2 ${suiteNumberIsInValid ? "border rounded-md  border-red-700 text-red-700 outline-red-700" : ""}`} />
                            <div className='flex'>
                                <input name='state' placeholder='State' className='w-full border-r border-[#b7b8ae] py-3 pl-2' required  />
                                <input name='zip-code' placeholder='Zip code' className='w-full  border-[#b7b8ae] py-3 pl-2' required />
                            </div>
                        </div>
                        { inputsInValid  && <div className='flex gap-x-2 items-center text-red-700 font-semibold font-nun '><AiOutlineExclamationCircle/>
                    <p className='text-sm'>This field is required</p>
                    </div>}
                    </div>
                    <div  className='grid mt-2 items-center border rounded-md border-[#b7b8ae] pl-2 pb-[1rem]'>
                        <p className='text-sm'>Country/region</p>
                        <p className='text-md'>Nigeria</p>
                    </div>
                   
                </div>
            </div>
            <div className='mt-[3rem] pt-[2rem] border-t-2 border-[#b7b8ae]'>
                <h1 className='text-lg text-black font-semibold'>Cancellation policy</h1>
                <p><span className='font-bold'>Free cancellation before 3:00 pm on aug 20.</span> Cancel before check-in on Aug 21 for a partial refund.</p>
            </div>
            <div className='mt-[3rem] pt-[2rem] border-t-2 border-[#b7b8ae]'>
                <h1 className='text-xl text-black font-semibold mb-3'>Ground rules</h1>
                <p>We ask every guest to remember a few simple things about what makes a great guest.</p>
                <div>

                <ul className='list-disc'>
                    <li>Follow the rules</li>
                    <li>Treat your host home like your own</li>
                </ul> 
                </div>
                
            </div>
            <div className='flex gap-[1rem] mt-[3rem] pt-[2rem] border-t-2 border-[#b7b8ae]'>
                <FcAlarmClock className='w-[3rem] h-[4rem] ' />
                <div>
                <p className='text-lg font-bold'>Your reservation won't be confirmed until the Host accepts your request (within 24 hours).</p>
                <p className='text-md text-gray-600'>you won't be charged until then</p>
                </div>
            </div>
            <div className='mt-[3rem] pt-[2rem] border-t-2 border-[#b7b8ae]'>
                <p className='text-sm w-full'>By selecting the button below, I agree to the <span className='underline font-bold'>Host's House Rules for guests. Airbnb's Rebooking and Refund Policy.</span> and that Airbnb can <span className='font-bold underline'>Change my payment method</span> if i'm responsible for damage. I agree to pay the total amount shown if the Host accepts my booking request. </p>
            </div>
            <div className='mt-[2rem] mb-[1rem]'>
                <button className="py-4 px-7 rounded-md bg-red-700 text-white font-semibold">{isLoading ? "sending request.." : "Request to book"}</button>
            </div>
        </div>
        </Form>
        <div id='payment-container' className=' fixed right-[10%] border border-[#b7b8ae] rounded-md w-[30rem] h-[25rem] px-[1rem]' >
            <div className='flex gap-2 pb-[3rem] border-b mt-[1rem]'>
                <div className='h-[6rem] w-[8rem] overflow-hidden border border-[#b7b8ae] rounded-md'>
                    <img src={img} alt='' className='h-[6rem] w-[8rem]' />
                </div>
                <div className='text-sm'>
                    <p>{name}</p>
                    <p>{title}</p>
                </div>
            </div>
            <div>
                <h2 className='py-[1rem]'>
                    Price details
                </h2>
                <div className=' grid gap-y-[1rem]'> 
                <div className='flex justify-between'>
                    <p>${price} x {noOfDays} nights</p>
                    <p>${nightSpent}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Weekly stay discount</p>
                    <p>${weeklyStayDiscount}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Airbnb service fee</p>
                    <p>${airbnbFee}</p>
                </div>
                </div>
                <div className='flex justify-between pt-[1rem] mt-[1rem] border-t font-bold'>
                    <p>Total (USD)</p>
                    <p>${totalFee}</p>
                </div>
            </div>
        </div>
 </div>
    </div>
  )
}

export default BookingRequest