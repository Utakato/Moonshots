const router = require("express").Router()
const project = require("../controller/project-controller.js")

router.get("/", function(req, res){
	res.json({
		status: "API Working",
		message: "Welcome to moonshots API"
	})
})

router.route("/projects")
	.get(project.getProject)



module.exports = router