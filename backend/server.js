const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');

const port = process.env.PORT || 10000;

app.use(express.json());
app.use(cors());

app.use('/', contactRoutes);
app.use('/', projectRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error("Startup Error:", error.message);
    process.exit(1);
  }
};

startServer();