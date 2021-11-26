const url = "http://localhost:5000/api/project"
const axios = require("axios")

export const fetchProjects = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log({data})
    return data
}

