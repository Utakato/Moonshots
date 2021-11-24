const Project = require("../models/project-model.js")

exports.getProject = async (req, res) => {
    Project.find({}, function(err, results){
        if(err){
            console.log(err)
        } else {
            res.json({results})
        }
    })
}


