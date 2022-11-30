export interface Passaenger {
  adults: number
  children: number
}

export interface FlightQuery {
  depDes: string
  arrDes: string
  depDate: string
  passengers: Passaenger
  roundTrip: boolean
  returnDate?: string
}
