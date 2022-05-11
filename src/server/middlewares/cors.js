const cors = require("cors");
  
// CORS middleware
const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
 
module.exports = cors(corsOptions)