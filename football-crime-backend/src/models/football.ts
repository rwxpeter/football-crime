export class Stadium {
  id: number
  name: string
  address: Address
  constructor (id: number, name: string, address: Address) {
    this.id = id
    this.name = name
    this.address = address
  }
}

export class Team {
  id: number
  name: string
  shortName: string
  founded: number
  crestUrl: string
  long: number
  lat: number
}

export class Address {
  street?: string
  postcode?: string
  country?: string
  region?: string
  constituency?: string
  district?: string
  parish?: string
  ward?: string
  long?: number
  lat?: number

  constructor (street: string, postcode: string) {
    this.street = street
    this.postcode = postcode
  }
}
