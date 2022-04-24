import React, {useContext} from 'react'
import Theme from '../Context/Theme'
import '../SASS/notfound.scss'


const NotFound = () => {
    const { theme } = useContext(Theme)

    return (
        <main className={`notfound-page ${theme}`}>
            <h2>Page Not Found</h2>
        </main>
    )
}

export default NotFound;
