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
export interface Itinerary {

  arriveAt: string
  depatureAt: string
  avaliableSeats: number
  prices: { adult: number, child: number, currency: string }[]
}

export interface Flight {
  arrivalDestination: string
  depatureDestination: string
  flight_id: string
  itineraries: Itinerary[]
}

export interface FlightData {
  depFlights: Flight[] | string
  returnFlights?: Flight[] | string
}
