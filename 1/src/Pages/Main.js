import React, {useContext} from 'react'
import CountriesList from '../Components/CountriesList'
import '../SASS/mainpage.scss'
import Theme from '../Context/Theme'

const Main = ({countries, error, loading}) => {
    const { theme } = useContext(Theme)
    if (loading) return 'loading ...'
    if (error) return 'error ...'
    return (
      <main className={`main-page ${theme}`}>
        <CountriesList countries={countries}/>
      </main>
    )
}

export default Main
