import React, { useRef, useContext } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import '../SASS/eachcountry.scss'
import BorderCountries from './BorderCountries';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Theme from '../Context/Theme';

const CountryInfo = ({countries, error,loading}) => {
    const { countryURL } = useParams()
    const { theme } = useContext(Theme)
    const navigate = useNavigate()
    const info = useRef()

    info.current = countries.find((item) => {
        return item.alpha3Code.toLowerCase() === countryURL.toLowerCase()
    })

    console.log(info)
    if (loading) return 'loading ...'
    if (error) return 'error ...'
    return (
        <>
        {info.current?
            <main className={`country-page ${theme}`}>
                <button onClick={() => navigate('/')} className={`back-button ${theme}`} to={'/'}><AiOutlineArrowLeft />Back</button>
                <div className='country-info'>

                    <div className='flag'>
                        <img src={info.current.flags.svg} />
                    </div>

                    <div className='caption'>

                        <h2 className='title'>{info.current.name}</h2>

                        <div className='properties'>
                            <div className='first-column'>
                                <p><strong>Nativd Name: </strong>{info.current.nativeName}</p>
                                <p><strong>Population: </strong>{info.current.population}</p>
                                <p><strong>Region: </strong>{info.current.region}</p>
                                <p><strong>Sub Region: </strong>{info.current.subregion}</p>
                                <p><strong>Capital: </strong>{info.current.capital}</p>
                            </div>
                            <div className='second-column'>
                                <p><strong>Top Level Domain: </strong>{info.current.topLevelDomain}</p>
                                <p><strong>Currencies: </strong>{info.current.currencies.map((item, index) => {
                                    if (index === 0) return (`${item.name}`)
                                    return (`, ${item.name}`)
                                })}</p>
                                <p><strong>Languages: </strong>{info.current.languages.map((item, index) => {
                                    if (index === 0) return (`${item.name}`)
                                    return (`, ${item.name}`)
                                })}</p>
                            </div>
                        </div>

                        <div className='border-countries'>
                            <h3>Border Countries:</h3>
                            <BorderCountries countries={countries} borders={info.current.borders} />
                        </div>

                    </div>

                </div>
            </main>
        : null}
        </>
    )
}

export default CountryInfo;
