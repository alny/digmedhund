var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
    type: {type: String, default: ''},
    title: {type: String, default: ''},
    image: {type: String, default: ''},
    description: {type: String, default: ''},
    stack: {type: String, default: ''},
    timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model('PostSchema', PostSchema)
