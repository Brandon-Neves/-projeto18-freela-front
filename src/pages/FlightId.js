import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getFlightsId } from '../service/cities'
import dayjs from 'dayjs'
import styled from 'styled-components'

function FligthId() {
  const params = useParams()
  const flyId = params.id
  const [flyDetails, setFlyDetails] = useState({})

  useEffect(() => {
    getFlightsId(flyId).then(res => {
      setFlyDetails(res.data)
    })
  }, [])

  return (
    <Container>
      <Link to={'/hotels'}>
        <h1>Buscar Hoteis</h1>
      </Link>
      <Box>
        <h1>Passagem para a cidade {flyDetails.cityto}</h1>
        <p>
          Cidade de destino: <span>{flyDetails.cityto}</span>
        </p>
        <p>
          Cidade de origem: <span>{flyDetails.cityfrom}</span>
        </p>
        <p>
          Companhia aérea: <span>{flyDetails.name}</span>
        </p>
        <p>
          Data e horário de partida:{' '}
          <span>{dayjs(flyDetails.depart).format('DD-MM-YYYY HH:mm')}</span>
        </p>
        <p>
          Data e horário de chegada:{' '}
          <span>{dayjs(flyDetails.return).format('DD-MM-YYYY HH:mm')}</span>
        </p>
        <p>
          Preço: <span>R$ {flyDetails.price},00</span>
        </p>
      </Box>
    </Container>
  )
}

export default FligthId

const Container = styled.div`
  margin: 50px auto;
  width: 70%;
  a {
    h1 {
      text-align: center;
      color: green;
      margin-bottom: 40px;
    }
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  span {
    font-weight: 700;
  }
`
