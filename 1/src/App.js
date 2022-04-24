import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import CountryInfo from "./Components/CountryInfo";
import Main from "./Pages/Main";
import Theme from "./Context/Theme";

function App() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme(prevState => {
			if (prevState === 'light') return 'dark'
			return 'light'
		})
    }

	useEffect(() => {
		console.log("this is app")
		setLoading(true);
		axios.get("https://restcountries.com/v2/all")
			.then(res => setData(res.data))
			.catch(cth => setError(cth))
			.finally(() => {
				setLoading(false)
				console.log("done axios")
			});
	}, [])
	

	return (
		<Theme.Provider value={{theme, toggleTheme}}>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<Main countries={data} error={error} loading={loading}/>} />
					<Route path=':countryURL' element={<CountryInfo countries={data} error={error} loading={loading} />} />
				</Route>
			</Routes>
		</Theme.Provider>
	);
}

export default App;
