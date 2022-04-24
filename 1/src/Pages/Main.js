import React, {useContext} from 'react'
import CountriesList from '../Components/CountriesList'
import '../SASS/mainpage.scss'
import Theme from '../Context/Theme'
import Loading from '../Components/Loading'

const Main = ({countries, error, loading}) => {
    const { theme } = useContext(Theme)
    if (loading) return <Loading />
    if (error) return 'error ...'
    return (
      <main className={`main-page ${theme}`}>
        <CountriesList countries={countries}/>
      </main>
    )
}

export default Main
