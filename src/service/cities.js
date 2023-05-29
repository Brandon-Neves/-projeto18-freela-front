import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import CityContext from '../contexts/CityContext'

export function useGetCities() {
  const [cities, setCities] = useState(undefined)

  function getCities() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cities`)
      .then(res => setCities(res.data))
      .catch(err => alert(err.response.data))
  }

  useEffect(() => {
    getCities()
  }, [])

  return { cities, getCities }
}

export function useGetFlightsCityId() {
  const [flightCityId, setFlightCityId] = useState(undefined)
  const { city } = useContext(CityContext)
  function getFlightCityId() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/flights/city/${city}`)
      .then(res => setFlightCityId(res.data))
      .catch(err => alert(err.response.data))
  }

  useEffect(() => {
    getFlightCityId()
  }, [])

  return { flightCityId, getFlightCityId }
}

export function getFlightsId(flyId) {
  const promise = axios.get(`${process.env.REACT_APP_API_URL}/flights/${flyId}`)
  return promise
}
