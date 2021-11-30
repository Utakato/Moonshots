export const updateQuery = (q) => async (dispatch) => {
	dispatch({
		type: "query/updateQueryOrder",
		payload: q,
	})
}

export const updateQueryOffset = (offset) => async (dispatch) => {
	dispatch({
		type: "query/updateQueryOffset",
		payload: offset,
	})
}



