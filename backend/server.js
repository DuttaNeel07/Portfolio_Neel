const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const port = 3000;

connectDB();

const corsOrigin = process.env.CORS_ORIGIN|| '*';

app.use(express.json);
app.use(require('cors')({
 origin: corsOrigin === '*' ? true : corsOrigin.split(','),
 credentials:true,
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
