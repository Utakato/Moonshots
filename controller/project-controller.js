const Project = require("../models/project-model.js")


// implement:  limit: 20, skip: 20
// implement: sort: anything.

exports.getProject = async (req, res) => {
    console.log(req.body)
    let sortKey = req.body.order.split("=")[0]
    let sortValue = req.body.order.split("=")[1]
    let sort = {
        [sortKey] : sortValue
    }
    let skip = req.body.offset
    console.log(sort)
    Project
        .find()
        .skip(skip)
        .sort(sort)
        .limit(20)
        .exec((err, results) => {
            err ? console.log(err) : res.json({results})
        })
    }
