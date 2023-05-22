// requirements
const express = require('express');
const routes = require('./routes');

// create PORT
const app = express();
const PORT = process.env.PORT || 3001;

// jsonify
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// PORT synced
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
