var Post = require('../models/Post')
var Promise = require('bluebird')


module.exports = {

  get: function(params){
        return new Promise(function(resolve, reject){
          Post.find(params, function(err, posts){
            if(err){
              reject(err)
              return
            }
            resolve(posts)
          })
        })
  },

  getById: function(id){
        return new Promise(function(resolve, reject){
          Post.findById(id, function(err, post){
            if(err){
              reject(new Error('Post not Found'))
              return
            }
            if(post == null){
              reject(new Error('Post not Found'))
            }


            resolve(post)
          })
        })
  },

  create: function(params){
        return new Promise(function(resolve, reject){
          Post.create(params, function(err, post){
            if(err){
              reject(err)
              return
            }
            resolve(post)
          })
        })
  }




}
