const express = require('express');
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv/config')

const myInfoRouter = require('./routes/myInfoRoute')
const categoriesRouter = require('./routes/categoriesRoute')
const exerciseRouter = require('./routes/exercisesRoute')
const workoutsRouter = require('./routes/workoutsRoute')
const workoutVolumeRouter = require('./routes/workoutVolumeRoute')

app.use(cors());
app.use(express.json());
app.use('/my-info', myInfoRouter);
app.use('/categories', categoriesRouter);
app.use('/exercises', exerciseRouter);
app.use('/workouts', workoutsRouter);
app.use('/workout-volume', workoutVolumeRouter);
app.use((req, res) => {
    res.status(404).send("Page not found")
})

mysql.connect({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_SCHEMA,
    password: process.env.DB_PASS
}, () => console.log('server is running'));

app.listen(5000)