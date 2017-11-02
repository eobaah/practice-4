const isLoggedIn = (request, response, next) => {
  if(!request.session.user) {
    response.redirect('/');
  } else {
    next();
  }
};


module.exports = { isLoggedIn };
