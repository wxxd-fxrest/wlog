const Router = require('koa-router');
const checkLoggedIn = require('../../lib/checkLoggedIn');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();
posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn.checkLogged, postsCtrl.write);

const post = new Router(); // api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn.checkLogged, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn.checkLogged, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

module.exports = posts; 
