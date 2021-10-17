import express from 'express';

 
let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // set duong dan public
    app.set("view engine", "ejs"); // same jsp, blade, 
    app.set("views", "./src/views");


}
module.exports = configViewEngine;