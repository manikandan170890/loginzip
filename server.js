const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect DB

connectDB();


//inint Middleware
app.use(express.json({ extended: false}))
var cors = require('cors');
app.use(cors());

app.get('/', (req,res) => res.send('API Running'));

//Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5025;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));