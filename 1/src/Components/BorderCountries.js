import React, {useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Theme from '../Context/Theme'


const BorderCountries = ({countries, borders}) => {
  const { theme } = useContext(Theme)
  const navigate = useNavigate()
  return (
    <>
      {borders?.map(border => {
        let targetBorder = countries.find((item) => {
          return item.alpha3Code.toLowerCase() === border.toLowerCase()
        })
        return (
          <button className={`border ${theme}`} onClick={() => navigate(`/${border}`)}>{targetBorder.name}</button>
        )
      })}
    </>
  )
}

export default BorderCountries;
