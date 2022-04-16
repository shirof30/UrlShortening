const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

//db connection
connectDB();

app.use(express.json({ extended:false}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    origin: '*'
}));
//routes
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));
const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
