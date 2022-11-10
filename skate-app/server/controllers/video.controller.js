const Video = require('../models/video.model')


// create pet
module.exports.createVideo = (req, res) => {
    Video.create(req.body)
        .then(video => res.json(video))
        .catch(err => res.status(400).json({ err }))
}

// get all
module.exports.allVideos = (req, res) => {
    Video.find()
        .then(video => res.json(video))
        .catch(err => res.status(400).json({ err }))
}

// get one
module.exports.getOneVideo = (req, res) => {
    Video.findById({ _id: req.params.id })
        .then(video => res.json(video))
        .catch(err => res.status(400).json({ err }))
}

// update one
module.exports.updateVideo = (req, res) => { // runValidators below is very important!!!!
    Video.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedVideo => res.json(updatedVideo))
        .catch(err => res.status(400).json({ err }))
}

// delete one
module.exports.deleteVideo = (req, res) => {
    Video.deleteOne({ _id: req.params.id })
        .then(deletedVideo => res.json(deletedVideo))
        .catch(err => res.status(400).json({ err }))
}