const express = require ('express');
const mongoose =require ('mongoose');
const model =require ('./model/todomodel')
const app =new express();

const routes = require ('./routes/todoRoutes')
app.use('fsd',routes)

require('dotenv').config(); 
const PORT=process.env.PORT;
require('./db/connection');

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));