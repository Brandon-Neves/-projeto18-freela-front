import styled from 'styled-components'

export default function Header() {
  return (
    <Hero>
      <h1>Travel</h1>
    </Hero>
  )
}

const Hero = styled.div`
  margin: 0 0 35px 0;

  h1 {
    text-align: center;
    margin: 50px 0;
  }
`
