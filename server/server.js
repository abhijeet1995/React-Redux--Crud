const express = require('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./routing/apiRouter');
const mongoose = require('mongoose');


//configure cors
app.use(cors());

// configure json parser for form-data handling
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (request,response) => {
    response.send(`<h2>Welcome to Express Server..</h2>`);
});

// configure router
app.use('/api', apiRouter);

// Connect to Mongo DB Database
mongoose.connect('mongodb://localhost:27017/employee-portal' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true}).
then((connection) => {
    console.log(`Connected to Mongo DB Database Successfully............`);
}).catch((err) => {
    console.error(err);
    process.exit(1); // to stop the node js process
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));