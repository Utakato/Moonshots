import * as api from "../api"

export const getProjects = () => async (dispatch) => {
	const { data } = await api.fetchProjects()
	console.log({data})
	dispatch({
		type: "projects/fetchAllProjects",
		payload: data,
	})
}