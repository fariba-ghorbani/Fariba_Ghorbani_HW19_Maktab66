import React, { useRef } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const CountryInfo = ({countries}) => {
    const { countryURL } = useParams()
    const info = useRef()

    info.current = countries.find((item) => {
        return item.alpha3Code.toLowerCase() === countryURL.toLowerCase()
    })


    return (
        <div>
            {info.current?
            info.current.name
            :null}
            <NavLink to='/'>back</NavLink>
        </div>
    )
}

export default CountryInfo;
