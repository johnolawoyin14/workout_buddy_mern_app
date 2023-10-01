require('dotenv').config()

const express=require('express')
const workoutRoutes=require('./routes/workout')
const userRoutes=require('./routes/user')
const morgan=require('morgan')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()


app.use(express.json())
app.use(cors())

app.use(morgan("dev"));

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)
const dbUrl = process.env.DATABASE;
mongoose
  .connect(dbUrl)
  .then((result) => app.listen(process.env.PORT, () => console.log("connected",1000)))
  .catch((err) => console.log(err));



