const router = require("express").Router()


router.get("/", function(req, res){
	res.json({
		status: "API Working",
		message: "Welcome to moonshots API"
	})
})

module.exports = router