import * as api from "../api"

export const getProjects = (query) => async (dispatch) => {
	const { data } = await api.fetchProjects(query)
	console.log({data})
	dispatch({
		type: "projects/fetchAllProjects",
		payload: data,
	})
}