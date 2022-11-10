const VideoController = require('../controllers/video.controller')
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
app.get('/api/allVideos',authenticate, VideoController.allVideos)

app.get('/api/video/:id',authenticate, VideoController.getOneVideo)

app.post('/api/video',authenticate, VideoController.createVideo)

app.put('/api/video/:id',authenticate, VideoController.updateVideo)

app.delete('/api/video/:id',authenticate, VideoController.deleteVideo)
}



