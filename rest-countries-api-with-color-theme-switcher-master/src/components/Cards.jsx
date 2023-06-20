import { styled } from 'styled-components'
import data from '../../data.json'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CountryCard from './CountryCard'
import { useGlobalContext } from '../context'

const Cards = () => {
  const navigate = useNavigate()

  const { setName, setData } = useGlobalContext()

  return (
    <Wrapper>
      <div className="filter">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a country..."
          className="search"
        />

        <select name="region" id="region">
          <option value="">Filter by region</option>
          <option value="africa">africa</option>
          <option value="america">america</option>
          <option value="asia">asia</option>
          <option value="europe">europe</option>
          <option value="oceania">oceania</option>
        </select>
      </div>
      <div className="container">
        {data.map((item) => {
          const {
            alpha3Code,
            flag,
            flags,
            name,
            population,
            region,
            capital,
            nativeName,
            subregion,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = item
          return (
            <div
              className="card"
              key={name}
              onClick={(e) => {
                navigate(`/${alpha3Code}`)
                setData({
                  flag: flag,
                  name: name,
                  nativeName: nativeName,
                  population: population,
                  region: region,
                  subRegion: subregion,
                  capital: capital,
                  currencies: [...currencies],
                  languages: [...languages],
                  borderCountries: [...borders],
                })
              }}
            >
              <img src={flag} alt="flags" className="flags" />
              <div className="content">
                <h4 className="heading">{name}</h4>
                <p className="subHeading">
                  Population:{' '}
                  <span className="value">
                    {population.toLocaleString('en-US')}
                  </span>
                </p>
                <p className="subHeading">
                  Region: <span className="value">{region}</span>{' '}
                </p>
                <p className="subHeading">
                  Capital: <span className="value">{capital}</span>{' '}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    justify-items: center;
  }

  .filter {
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    margin-bottom: 3rem;
  }

  .search {
    width: 400px;
    padding: 1rem;
    outline: none;
    border: none;
    box-shadow: 0 0 5px var(--light-mode-input);
  }

  .card {
    width: 250px;
    height: 320px;
    border-radius: 0.2rem;
    overflow: hidden;
    box-shadow: 0 0 15px lightgrey;
  }

  .flags {
    width: 100%;
    height: 160px;
  }

  .content {
    padding: 1rem;
  }

  .heading {
    margin-bottom: 1rem;
  }

  .subHeading {
    font-weight: 600;
  }

  .value {
    font-weight: 300;
  }

  .card:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  select option {
    text-transform: capitalize;
  }
`

export default Cards
