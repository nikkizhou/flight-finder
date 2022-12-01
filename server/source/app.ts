import express from "express";
import { Application } from 'express';
import { getFlights } from "./controller";
import cors from 'cors'
import dotenv from 'dotenv'


const app: Application = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/api/flights', getFlights);
// app.get('/api/puppies/:id', getPuppy);
// app.post('/api/puppies', addOnePuppy);
// app.put('/api/puppies/:id', updateOnePuppy);
// app.delete('/api/puppies/:id', deleteOnePuppy);
// app.post('/api/puppies/many', addManyPuppies);


export default app;
