import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import '../SASS/filters.scss'
import Theme from '../Context/Theme'
import {AiOutlineSearch} from 'react-icons/ai'

const CountriesList = ({countries}) => {
    const regions = [...new Set([...countries].map((item) => item.region))]
    const [filterRegion, setFilterRegion] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    const { theme } = useContext(Theme)

    const goToCountryPage = (url) => {
        navigate(url)
    }


    useEffect(() => {
        console.log(filterRegion);
    }, [filterRegion])


    return (
        <div className='main-page'>
            {/* changing serach param based on input value */}
            <div className='filter-box'>
                <input
                    placeholder={`search for a country ...`}
                    className={theme}
                    value={searchParams.get("search") || ""}
                    onChange={(event) => {
                        let search = event.target.value;
                        if (search) {
                            setSearchParams({ search });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />

                <select className={theme} onChange={(e) => setFilterRegion(e.target.value)}>
                    <option className="default" value="" selected hidden>region</option>
                    <option value="all">All</option>
                    {regions.map((item) => 
                        <option key={item}>{item}</option>
                    )}
                </select>
            </div>

            {/* filtering countries based on searched value */}
            <div className='main-countries-list'>
            {countries
                .filter(country => {
                    let search = searchParams.get("search");
                    if (!search) return true;
                    let name = country.name.toLowerCase();
                    return name.startsWith(search.toLowerCase())
                    })
                .filter(country => {
                    if (!filterRegion || filterRegion==="all") return true;
                    return country.region === filterRegion
                })
                .map(country => 
                    (
                        <div 
                        key={country.name} 
                        className={`country ${theme}`}
                        onClick={() => goToCountryPage(country.alpha3Code)}
                        >
                            <img className='figure' src={country.flags.svg} alt={'test'}></img>
                            <div className='caption'>
                                <h3 className='title'>{country.name}</h3>
                                <p><strong>Population: </strong>{country.population}</p>
                                <p><strong>Region: </strong>{country.region}</p>
                                <p><strong>Capital: </strong>{country.capital}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default CountriesList;
