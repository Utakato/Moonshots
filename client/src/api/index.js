const url = "http://localhost:5000/api/projects"
const axios = require("axios")

export const fetchProjects = (query) => {
    return axios.get(url+query)
}

