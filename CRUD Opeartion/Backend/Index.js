const express = require('express');
const app = express();
const mongodb = require('./src/DB/DBConnection');
const cors= require('cors')

app.use(express.json()); // <-- Move this line up
app.use(cors());

app.use('', require('./src/Routers/RouterRegister'));

mongodb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
