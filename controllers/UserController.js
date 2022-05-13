class UserController{
    index(req, res) {
      res.send('respond with a resource');
      }
}

module.exports = new UserController();