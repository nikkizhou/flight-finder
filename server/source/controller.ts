import { Request, Response, Application } from 'express';
import { Itinerary, Flight,Passenger } from "./models";
import data from './data.json'
import { v4 as uuidv4 } from 'uuid';


const isRightFlight = (f: Flight,depDes:string, arrDes:string) =>
  f.depatureDestination.toLowerCase() == (depDes as string).toLowerCase()
  && f.arrivalDestination.toLowerCase() == (arrDes as string).toLowerCase()

const isRightItiner = (itiner: Itinerary,date:string,nrPas:number) =>
  itiner.depatureAt.includes(date)
  && itiner.avaliableSeats >= nrPas

const filterFlights = (depDes: string, arrDes: string, date: string, passengers: Passenger) => {
  let flights:Flight[]|string = []
  const nrPas = passengers.adults + passengers.children
  const rightDateFlights = data.filter(f => isRightFlight(f,depDes,arrDes))

  rightDateFlights.forEach(f => {
    let newF = {
      flight_id: f.flight_id,
      depatureDestination: f.depatureDestination,
      arrivalDestination: f.arrivalDestination,
      itineraries: null
    }
    const newItiners = f?.itineraries.filter(itiner => {
      if (isRightItiner(itiner, date, nrPas)) {
        //@ts-ignore
        itiner.id = uuidv4()
        return itiner
      }
    })
    newF.itineraries = newItiners;

    (flights as Flight[]).push(newF) 
    if (newItiners.length == 0) flights = 'no data found'
  })
  return flights
}

export const getFlights = async (req: Request, res: Response) => {
  if (!req.query.depDes) return res.status(400).send("Please include request body")
  const { depDes, arrDes, depDate, returnDate, passengers, roundTrip } = req.query
  console.log(req.query);
  //@ts-ignore
  const depFlights = filterFlights(depDes, arrDes, depDate, passengers)
  console.log((depFlights as Flight[])[0].itineraries);
  //@ts-ignore
  const returnFlights = roundTrip=='true' ? filterFlights(arrDes, depDes, returnDate, passengers) : []
  console.log(returnFlights);
  
  res.status(200).send({ depFlights, returnFlights })
}
