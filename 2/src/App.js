import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import ButtonAppBar from './Pages/Appbar';
import Main from './Pages/Main';
import database from './data';
import { DataManipulation } from './Context/dataManiupulation'
import { UserLogin } from './Context/userLogin';
import { Routes, Route } from 'react-router-dom';
import Authentication from './Pages/Authentication';
import RequireAuth from './Pages/RequireAuth';
import Dashboard from './Pages/Dashboard';

function App() {
    const [list, setList] = useState(database)
    const [token, setToken] = useState(localStorage.getItem("token") || "")
	const [showMode, setShowMode] = useState(false)
	const [editMode, setEditMode] = useState(false)
	const [targetData, setTargetData] = useState({})


	const deleteItemInDatabase = (item, bool) => {
        let temp = list[item.category].filter(li => {
			return li.id !== item.id
		})
		for (let i = 0; i < temp.length; i++) {
			temp[i].id = Number(i) + 1
		}
        setList(prevState => ({...prevState, [item.category]: temp}) )
		if (bool) {
			setShowMode(false)
			setEditMode(false)
		}
    }

    const editItemInDatabase = (oriData, changedData) => {
		if (oriData.category == changedData.category) {
			let temp2 = list[oriData.category]
			temp2 = temp2.map(li => {
				if (li.id == oriData.id) return changedData
				return li
			})
			setList(prevState => ({...prevState, [oriData.category]: temp2}))
			setTargetData(changedData)
		} else {
			deleteItemInDatabase(oriData, false)
			addItemInDatabase(changedData, false)
		}
    }

    const addItemInDatabase = (item, bool) => {
        let lengthOfCategory = list[item.category].length
        let newCategory = [...list[item.category], {...item, id: lengthOfCategory+1}]
        setList(prevState => ({...prevState, [item.category]: newCategory}) )
		if (bool == false) {
			setTargetData({...item, id: lengthOfCategory+1})
		}
    }

	return (
		<UserLogin.Provider value={{token, setToken}}>

			<DataManipulation.Provider value={{
				list,
				deleteItemInDatabase,
				editItemInDatabase,
				addItemInDatabase,
				showMode,
				editMode,
				targetData,
				setShowMode,
				setEditMode,
				setTargetData,
			}}>
					<Routes>
						<Route path='/' element={<ButtonAppBar/>}>
							<Route index element={<Main />} />
							<Route path='login' element={<Authentication />} />
							<Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
						</Route>
					</Routes>
			</DataManipulation.Provider>
		</UserLogin.Provider>
	);
}

export default App;
