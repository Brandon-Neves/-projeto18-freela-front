import styled from 'styled-components'
import { useGetCities } from '../service/cities'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CityContext from '../contexts/CityContext'

function HomePage() {
  const { cities } = useGetCities()
  const { setCity } = useContext(CityContext)
  const navigate = useNavigate()

  function submitForm(e) {
    e.preventDefault()
    navigate('/passagens')
  }

  return (
    <>
      <Main>
        <img
          src="https://www.flyhurb.com/wp-content/uploads/2022/06/heroMainHome.jpg"
          alt=""
        />
        <form>
          <select onChange={e => setCity(e.target.value)}>
            <option value="">Seleciona a cidade de destino</option>
            {cities ? (
              cities.map(c => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))
            ) : (
              <>... carregando</>
            )}
          </select>
          <button type="submit" onClick={submitForm}>
            Pesquisar
          </button>
        </form>
      </Main>
    </>
  )
}

export default HomePage

const Main = styled.div`
  img {
    max-width: 90%;
    display: block;
    margin: 0 auto;
  }
  select {
    display: block;
    margin: 25px auto 15px auto;
    width: 90%;
    padding: 15px;
    text-align: center;
    font-size: 1rem;
  }
`
