import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

const CountryCard = () => {
  const { data } = useGlobalContext()

  const navigate = useNavigate()
  // console.log(data)

  return (
    <Wrapper>
      <button className="back-btn" onClick={() => navigate(-1)}>
        back
      </button>
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
                Currencies: <span className="value"> </span>
              </p>
              <p className="subHeading">
                Languages: <span className="value">{}</span>
              </p>
            </div>
          </div>
          <p className="subHeading">Border Countries: </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-bottom: 7rem;

  .back-btn {
    padding: 0.5rem 2rem;
    text-transform: capitalize;
    border: none;
    background-color: transparent;
    box-shadow: 0 0 4px var(--light-mode-input);
  }

  .back-btn:hover {
    cursor: pointer;
    box-shadow: 0 0 8px var(--light-mode-input);
  }

  .container {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 3rem;
  }

  .flag {
    max-width: 90%;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .sub-headings {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .subHeading {
    font-weight: 600;
  }

  .value {
    font-weight: 300;
  }
`
export default CountryCard
