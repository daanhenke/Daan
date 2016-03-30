var express = require("express");
var apiData = require('./../config/api');

var apiRouter = express.Router();
var blogRouter = express.Router();
var pageRouter = express.Router();

var BlogPost = require('./../models/BlogPost');

apiRouter.get('/', function (req, res) {
    res.jsonp(apiData.root);
});

apiRouter.use('/blog', blogRouter);
apiRouter.use('/page', pageRouter);

blogRouter.get('/', function (req, res) {
    res.jsonp(apiData.blog.root);
});

blogRouter.get('/posts', function (req, res) {
   BlogPost.find({}, function (err, posts) {
       if (err) throw err;

       res.jsonp(posts);

   });
});

blogRouter.get('/post/:id', function (req, res) {
    BlogPost.findOne({_id: req.params.id}, function (err, post) {
        if (err) throw err;
        if (post) {
            res.jsonp(post);
        } else {
            res.jsonp({ success: false});
        }
    })
});

blogRouter.get('/testpost', function (req, res) {
    var post = new BlogPost({
        title: 'TestPost',
        date: 'none >:D',
        content: '<br><b>sup</b>',
        contentType: 'html'
    });

    post.save(function (err) {
        if (err) throw err;

        res.jsonp({ success: true });
    })
});



module.exports = {
    apiRouter: apiRouter,
    blogRouter: blogRouter,
    pageRouter: pageRouter
};