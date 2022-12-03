import { Request, Response, Application } from 'express';
import { Itinerary, Flight,Passenger } from "./models";
import data from './data.json'


const filterFlights = (depDes: string, arrDes: string, date: string, passengers: Passenger) => {
  let flights:any[]|string = []
  const nrPas = passengers.adults + passengers.children

  const isRightFlight = (f: Flight) =>
    f.depatureDestination.toLowerCase() == (depDes as string).toLowerCase()
    && f.arrivalDestination.toLowerCase() == (arrDes as string).toLowerCase()
  const rightDateFlights = data.filter(f => isRightFlight(f))

  rightDateFlights.forEach(f => {
    let newF = {
      flight_id: f.flight_id,
      depatureDestination: f.depatureDestination,
      arrivalDestination: f.arrivalDestination,
      itineraries: null
    }
    const isRightItiner = (itiner: Itinerary) =>
      itiner.depatureAt.includes(date as string)
      && itiner.avaliableSeats >= nrPas
    const newItiner = f.itineraries.filter(itiner => isRightItiner(itiner))
    console.log(newItiner.length == 0);
    
    newF.itineraries = newItiner;
    (flights as any[]).push(newF) 
    if (newItiner.length == 0) flights = 'no data found'
  })

  return flights
}

export const getFlights = async (req: Request, res: Response) => {
  if (!req.query) return res.status(400).send("Please include request params")
  const { depDes, arrDes, depDate, returnDate, passengers, roundTrip } = req.query
  console.log(req.query);
  //@ts-ignore
  const depFlights = filterFlights(depDes, arrDes, depDate, passengers)
  console.log(depFlights);
  //@ts-ignore
  const returnFlights = roundTrip=='true' ? filterFlights(arrDes, depDes, returnDate, passengers) : []
  console.log(returnFlights);
  
  res.status(200).send({ depFlights, returnFlights })
}
