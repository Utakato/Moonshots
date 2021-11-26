const url = "http://localhost:5000/api/project"
const axios = require("axios")

export const fetchProjects = () => {
    return axios.get(url)
}

