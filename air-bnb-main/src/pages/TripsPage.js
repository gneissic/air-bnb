import React, {Fragment} from 'react'
import { useSelector } from 'react-redux'
import NewTrips from '../components/trips/NewTrips'
const TripsPage = () => {
  const trips = useSelector((state)=> state.trips.tripData)
  return (
    <Fragment>
    <NewTrips data={trips} />
    </Fragment>
  )
}
export default TripsPage