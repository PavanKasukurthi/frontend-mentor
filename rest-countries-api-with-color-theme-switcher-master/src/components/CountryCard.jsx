import styled from 'styled-components'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

const CountryCard = () => {
  const { data } = useGlobalContext()

  const navigate = useNavigate()
  let { alpha3code } = useParams()
  console.log(data)

  return (
    <Wrapper>
      <button onClick={() => navigate(-1)}>back</button>
      <div className="container">
        <div className="flag-img">
          <img src={data.flag} alt="flag" className="flag" />
        </div>
        <div className="content">
          <h1>{data.name}</h1>
          <div className="sub-headings">
            <div className="col-1">
              <p className="subHeading">
                Native Name: <span className="value"> {data.nativeName} </span>
              </p>
              <p className="subHeading">
                Population: <span className="value"> {data.population} </span>
              </p>
              <p className="subHeading">
                Region: <span className="value"> {data.region} </span>
              </p>
              <p className="subHeading">
                Sub Region: <span className="value"> {data.subRegion} </span>
              </p>
              <p className="subHeading">
                Capital: <span className="value"> {data.capital} </span>
              </p>
            </div>
            <div className="col-2">
              <p className="subHeading">
                Top Level Domain:{' '}
                <span className="value"> {data.capital} </span>
              </p>
              <p className="subHeading">
                Currencies: <span className="value">  </span>
              </p>
              <p className="subHeading">
                Languages: <span className="value">{}</span>
              </p>
            </div>
          </div>
          <p>Border Countries: </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-bottom: 7rem;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .flag{
    max-width: 90%;
  }
  .sub-headings{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export default CountryCard
