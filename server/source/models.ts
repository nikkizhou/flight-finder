export interface Passenger {
  adults: number
  children: number
}

export interface FlightQuery {
  depDes: string
  arrDes: string
  depDate: string
  passengers: Passenger
  roundTrip: boolean
  returnDate?: string
}
