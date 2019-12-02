/* Modules */
import express from "express";
import morgan from "morgan";

/* RouterI */
import index_routes from "./routes/index.routes";

const app = express();

app.use(morgan("dev"));
app.use(index_routes);

module.exports = app;
