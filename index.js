import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080;
const test = process.env.DATABASE_URI

// middleware

// routes

// listen