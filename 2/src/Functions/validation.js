export const itemFormValidation = (values) => {
	const errors = {title: true, category: true, description: true}
	Object.keys(values).map(item =>{
		if (values[item].trim() === "") {
			errors[item] = false
		}
	})
	return errors
}

export const userFormValidation = (values) => {
	const errors = {email: true, password: true}
	Object.keys(values).map(item =>{
		if (values[item].trim() === "") {
			errors[item] = false
		}
	})
	return errors
}
