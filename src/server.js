import express from 'express'
import bodyParser from 'body-parser';
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import dotenv from 'dotenv';
import connectDb from '../src/config/connectDB';

dotenv.config();
let app = express();
// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
viewEngine(app);
initWebRoutes(app);

connectDb();

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("Nodejs is running on the port " +port);
});