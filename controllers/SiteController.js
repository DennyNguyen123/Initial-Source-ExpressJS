class SiteController{
  // GET /news
  index(req,res){
      res.render("index",{title : "Initial Source"});
  }
}

module.exports = new SiteController;