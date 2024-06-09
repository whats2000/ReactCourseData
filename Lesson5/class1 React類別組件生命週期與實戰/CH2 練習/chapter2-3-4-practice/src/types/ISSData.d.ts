/**
 * ISSData
 */
export type ISSData = {
  timestamp: number
  message: string
  iss_position: {
    latitude: string
    longitude: string
  }
}
