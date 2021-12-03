const url = "https://test-moonshots.herokuapp.com/api/projects"
const axios = require("axios")

export const fetchProjects = (query) => {
    return axios.post(url , query)
}