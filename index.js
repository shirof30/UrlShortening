const express = require('express');
const app = express();
const connectDB = require('./config/db');

//db connection
connectDB();

app.use(express.json({ extended:false}));

//routes
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));
const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
