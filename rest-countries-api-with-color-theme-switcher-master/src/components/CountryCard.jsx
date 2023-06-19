import styled from 'styled-components'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

const CountryCard = () => {
  const { name } = useGlobalContext()

  const navigate = useNavigate()
  let { alpha3code } = useParams()
  console.log(name)

  return (
    <Wrapper>
      <button onClick={() => navigate(-1)}>back</button>
      <h1>CountryCard</h1>
      <p>{name}</p>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-bottom: 7rem;
`
export default CountryCard
