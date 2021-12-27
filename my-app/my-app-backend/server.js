'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT =3004;
app.use(express.json());
const dotenv = require('dotenv')
const mongoos = require('mongoose')
const routesUrls = require('./route/route')

dotenv.config()



mongoos.connect(process.env.DATABASE , () => console.log("DATABASE"))

app.use('/app' , routesUrls)
app.listen(PORT, () => console.log(`listening on ${PORT}`));
