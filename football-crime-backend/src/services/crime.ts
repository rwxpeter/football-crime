import { DataPoliceClient } from '@/clients/data-police-uk/client'
import { Crimes, Crime } from '@/presentation/models/crime'

/**
 * Retrieves the crime statistics for a particular location
 * filtered by latitude, longitude and date (in format year-month|XXXX-XX)
 * @param lat
 * @param long
 * @param date
 * @returns a collection of crimes
 */
const getCrimesByLocation = async (lat: number, long: number, date: string): Promise<Crimes> => {
  // lookup the collection of crimes associated with lat/long and year/month
  const crimes = await DataPoliceClient.lookupByLongLat(date, long, lat)

  // create the base crimes object
  const result: Crimes = {
    lat: lat,
    long: long,
    crimes: []
  }

  // if there are any crimes
  if (crimes && crimes.length > 0) {
    // map the resulting crimes to a new model
    result.crimes = crimes.map((crime) => new Crime(
      crime.category,
      crime.month,
      crime.outcome_status ? crime.outcome_status.category : '',
      crime.location.street.name
    ))
  }

  return result
}

export {
  getCrimesByLocation
}
