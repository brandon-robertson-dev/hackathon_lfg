function index(req, res) {
  res.send("Welcome");
}

function dashboard(req, res) {
  const username = req.user
  res.render('dashboard', { username })
}

module.exports = {
  index,
  dashboard
}