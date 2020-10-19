function authRedirect(req, res, next) {
  if (req.user) {
    return res.redirect('/posts')
  }
  return next()
}

function authorise(req, res, next) {
  if (req.user) {
    return next()
  }
  return res.redirect('/posts')
}

module.exports = {
  authRedirect,
  authorise,
}