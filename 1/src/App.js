import { useEffect, useState } from "react";
import axios from "axios";
import MainCountriesList from "./Components/MainCountriesList";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import CountryInfo from "./Components/CountryInfo";

function App() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()

	useEffect(() => {
		setLoading(true);
		axios.get("https://restcountries.com/v2/all")
			.then(res => setData(res.data))
			.catch(cth => setError(cth))
			.finally(() => setLoading(false));
	}, [])
	
	// useEffect(() => {
	// 	let list = [...data].map((item) => item.region)
	// 	setRegions([...new Set(list)])
	// }, [data])

	return (
		<Routes>
			<Route path='/' element={<Navbar />}>
				<Route index element={<MainCountriesList countries={data} error={error} loading={loading}/>} />
				<Route path=':countryURL' element={<CountryInfo countries={data} />} />
			</Route>
		</Routes>
	);
}

export default App;
