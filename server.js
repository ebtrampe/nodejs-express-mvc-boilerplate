const app = require('./app');
require('dotenv').config({ path: `${__dirname}/config.env` });

const PORT = process.env.PORT;

app.listen(PORT || 3000, () =>
  console.log(`Server listening on port ${PORT || 3000}`)
);
