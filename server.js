const express = require("express");
const getRoutes = require('./cart-items-routes.js');
// const putRoutes = require('./put-routes.js');
//const postRoutes = require('./post-routes.js');
// const delRoutes = require('./delete-routes.js');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('./public'));
app.use("/cart-items", getRoutes);



app.listen(port, () => console.log(`Server up and running on port: ${port}`));

