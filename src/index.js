const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');



const middlewears = require('./middlewares');


const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
});

app.use(middlewears.notFound);

app.use(middlewears.errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening at http://localhost:3001: ${port}`);

});
