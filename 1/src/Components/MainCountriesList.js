import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import '../SASS/country.scss'
import '../SASS/filters.scss'

const MainCountriesList = ({countries, error, loading}) => {
    const regions = [...new Set([...countries].map((item) => item.region))]
    const [filterRegion, setFilterRegion] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    const goToCountryPage = (url) => {
        navigate(url)
    }


    useEffect(() => {
        console.log(filterRegion);
    }, [filterRegion])

    if (loading) return 'loading ...'
    if (error) return 'error ...'
    return (
        <div className='main-page'>
            {/* changing serach param based on input value */}
            <div className='filter-box'>
                <input
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

                <select onChange={(e) => setFilterRegion(e.target.value)}>
                    <option className="default" value="" selected hidden>region</option>
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
                    if (!filterRegion) return true;
                    return country.region === filterRegion
                })
                .map(country => 
                    (
                        <div 
                        key={country.name} 
                        className='country'
                        onClick={() => goToCountryPage(country.alpha3Code)}
                        >
                            <img className='figure' src={country.flags.svg} alt={'test'}></img>
                            <div className='caption'>
                                <h4>{country.name}</h4>
                                <p>Population: {country.population}</p>
                                <p>Region: {country.region}</p>
                                <p>Capital: {country.capital}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default MainCountriesList;
