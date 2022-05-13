const siteRoute = require("./site")
const userRoute = require("./users")

function route(app){

  app.use("/users",userRoute)
  app.use("/",siteRoute)    
}

module.exports = route;