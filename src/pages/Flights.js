import { useContext } from 'react'
import { useGetFlightsCityId } from '../service/cities'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Flights() {
  const { flightCityId } = useGetFlightsCityId()

  return (
    <Container>
      <h1>Passagens</h1>
      <Box>
        {flightCityId ? (
          flightCityId.map(f => (
            <Link key={f.id} to={`/passagem/${f.id}`}>
              <FlightsCity>
                <h2>
                  Saindo de {f.cityto} para {f.cityfrom}
                </h2>
                <p>{dayjs(f.depart).format('DD-MM-YYYY HH:mm')}</p>
                <p>R$ {f.price},00</p>
              </FlightsCity>
            </Link>
          ))
        ) : (
          <>Carregando</>
        )}
      </Box>
    </Container>
  )
}

export default Flights

const Container = styled.div`
  margin: 50px auto;
  width: 80%;
  h1 {
    text-align: center;
  }
`

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 45px;
  a {
    width: 250px;
  }
`

const FlightsCity = styled.div`
  display: flex;
  flex-direction: column;
`
