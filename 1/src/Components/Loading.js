import React, {useContext} from 'react'
import '../SASS/loader.scss'
import Theme from '../Context/Theme'

const Loading = () => {
    const { theme } = useContext(Theme)

    return (
        <main className={`loader-page ${theme}`}>
            <div className="loader"></div>
        </main>
    )
}

export default Loading;
