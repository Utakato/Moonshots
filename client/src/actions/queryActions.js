export const updateQuery = (q) => async (dispatch) => {
	dispatch({
		type: "query/updateQuery",
		payload: q,
	})
}