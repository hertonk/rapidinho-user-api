import "reflect-metadata";

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';
import bodyParser from  'body-parser'; 

import "./database";

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(bodyParser.json({limit:'50mb'})); 
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'})); 
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.json(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }

    console.error(err);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});

app.listen(3344, () => {
    console.log('🚀 Server started on port 3344!');
});