import styled from 'styled-components'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const CountryCard = () => {
  const navigate = useNavigate()
  let { alpha3code } = useParams()
  console.log(alpha3code)

  return (
    <Wrapper>
      <button onClick={() => navigate(-1)}>back</button>
      <h1>CountryCard</h1>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-bottom: 7rem;
`
export default CountryCard
