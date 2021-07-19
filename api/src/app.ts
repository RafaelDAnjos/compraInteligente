import {Router,Response,Request,Express} from 'express'; 
import indexRoutes from './routes/indexRoutes';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json()); // para permitir converter o dado que chega em json
app.use(express.urlencoded({extended:false})); // converter dados de formulário em json
app.use(indexRoutes);

let port = process.env.PORT || 3000;


app.listen(port, () => console.log("Server running on port ", port));