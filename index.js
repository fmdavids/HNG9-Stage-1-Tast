const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const infoRoute = require('./route/infoRoute')


const app = express();


const port = process.env.PORT || 3030
app.use(express.json());
app.use(cors());

// log routes visited
app.use(morgan("common"))

app.use(`/api/`, infoRoute)




app.listen(port, () => console.log(` Server is up on ${port} `))