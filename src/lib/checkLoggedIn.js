const checkLoggedIn = (ctx, next) => {
    if (!ctx.state.user) {
        ctx.status = 401; // Unauthorized
        return;
    }
    return next();
};
    
  
module.exports = checkLoggedIn;


// exports.checkObjectId = (ctx, next) => {
//     const {id} = ctx.params; 
//     if(!ObjectId.isValid(id)) {
//         ctx.status = 400; // Bad Request
//         return; 
//     }
//     return next(); 
// }; 
