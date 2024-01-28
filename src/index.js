//const express = require('express')
import express from "express"
import AppRoutes from './routes/index.js'
import { MongoClient } from "mongodb"
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use('/',AppRoutes)


app.listen(PORT, ()=>console.log(`App is listening to ${PORT}`))