// interfaces for Formdata

export interface Passenger {
  adults: number
  children: number
}

export interface FormDataI {
  depDes: string
  arrDes: string
  depDate: string
  passengers?: Passenger
  roundTrip?: boolean
  returnDate?: string
}


// interfaces for flightData
export interface Itinerary{
  id:string
  arriveAt: string
  depatureAt: string
  avaliableSeats: number
  prices:{adult:number,child:number,currency:string}[]
}

export interface Flight {
  arrivalDestination:string
  depatureDestination:string
  flight_id:string
  itineraries:Itinerary[]

}

export interface FlightData {
  depFlights: Flight[]
  returnFlights?: Flight[],
  passengers:{adult:number,child:number}
}

//interfaces for ChosenFlight
export interface ChosenFlight{
  id: string
  title:string
  depDes: string
  arrDes: string
  flight_id: string
  depatureAt: string
  arriveAt: string
  avaliableSeats: number
  prices: { adult: number, child: number, currency: string }[]
}

export interface PassengerInfo{
  firstName: string
  lastName: string
  phone: number
  email: string
  passNr: string
}
