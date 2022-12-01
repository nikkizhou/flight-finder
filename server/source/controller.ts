import { Request, Response, Application } from 'express';
import { FlightQuery } from "./models";
import data from './data.json'


export const getFlights = async (req: Request, res: Response) => {
  if (!req.query) return res.status(400).send("Please include request params")
  const { depDes, arrDes, depDate, passengers } = req.query
  console.log(req.query);
  
  const rightFlights = []

  //@ts-ignore
  const nrPas = parseInt(passengers.adults) + parseInt(passengers.children)
  console.log(nrPas);
  
  const rightDateFlights = data.filter(obj => obj.depatureDestination == depDes && obj.arrivalDestination == arrDes)

  rightDateFlights.forEach(obj => {
    let newObj = { flight_id: obj.flight_id, depatureDestination: obj.depatureDestination, arrivalDestination: obj.arrivalDestination, itineraries:null }
    const newItiner = obj.itineraries.filter(itiner => itiner.depatureAt.includes(depDate as string) && itiner.avaliableSeats >= nrPas)
    newObj.itineraries = newItiner
    rightFlights.push(newObj);
  })
  
  res.status(200).send(rightFlights)
}
