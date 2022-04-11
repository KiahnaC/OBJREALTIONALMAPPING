const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(function() {


  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

})

// const mySql = require('mySql');
// const connection = mySql.createConnection({
//   host: "localhost",
//   user: 'mysql@localhost',
//   password: 'ATXishome440!',
// });
// connection.connect(function(err){

//   if (err) throw err;
//   console.log("Connected!");
// });
