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

function checkIfUserLoggedIn(req, res, template, templateData) {
  let data = {data: templateData}
  if(req.user){
    let user = {username: req.user.username, id: req.user._id}
    let combinedObj = {...user, ...data}
    console.log(combinedObj.data[0])
    res.render(template, combinedObj)
  } else {
    res.render(template, data)
  }
}

module.exports = {
  authRedirect,
  authorise,
  checkIfUserLoggedIn,
}