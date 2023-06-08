const Router = require('koa-router');
const checkLoggedIn = require('../../lib/checkLoggedIn');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postsCtrl.list);

posts.post('/', 
    checkLoggedIn, 
    postsCtrl.write
);

const post = new Router(); // api/posts/:id

posts.get('/',
    postsCtrl.read
);

posts.delete('/', 
    checkLoggedIn, 
    postsCtrl.checkOwnPost,
    postsCtrl.remove,
);

posts.patch('/', 
    checkLoggedIn, 
    postsCtrl.checkOwnPost,
    postsCtrl.update
);

posts.use('/:id', postsCtrl.getPostById, post.routes());

module.exports = posts; 
