const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const port = 8000;
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');

connectDB();

const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/', contactRoutes);
app.use('/', projectRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
