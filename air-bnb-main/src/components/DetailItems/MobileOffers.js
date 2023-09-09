import React from 'react'
import {  RiMindMap} from "react-icons/ri";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbToolsKitchen } from "react-icons/tb";

const MobileOffers = ({data}) => {
  return (
    <div className='lg:hidden'>
    < div>
        <img  src={data.img} alt='' />
    </div>
    <div>
        <h1>{data.name}</h1>
        <p className='underline font-bold'>{data.title}</p>
    </div>
    <div>
        <p><span>Lower price</span> Your dates are $169 less than the avg. nightly rate of last 60 days </p>
    </div>
    <div>
        <p>Entire rental unit hosted by Alee</p>
        <ul>
            <li> 4 guests </li>
            <li> Studio </li>
            <li> 1bed </li>
            <li> 1bed </li>
            </ul>
    </div>
    <div>
        <p>What this place offers</p>
        <div>
            <div>
                <RiMindMap/>
                <p>City skyline view</p>
            </div>
            <div>
                <TbToolsKitchen/>
                <p>Kitchen</p>
            </div>
            <div>
                <AiOutlineWifi/>
                <p>Wifi</p>
            </div>
            <div>
                <BsPersonWorkspace/>
                <p>Dedicated workspace</p>
            </div>
            <div>
                <AiOutlineCar/>
                <p>Free parking on premises</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default MobileOffers