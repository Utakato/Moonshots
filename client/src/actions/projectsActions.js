import * as api from "../api"

export const getProjects = (query) => async (dispatch) => {
	try {

		console.log(query)
		const { data } = await api.fetchProjects(query)
		console.log({data})
		dispatch({
			type: "projects/fetchAllProjects",
			payload: data,
		})
	} catch (error) {
		console.log(error.message)
	}
}
