import bodyParser from "body-parser";
import express from "express";
import { ListenPlugin, RouterPlugin } from "./plugin";
import fileUpload from "express-fileupload";
import cors from "cors";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({}));
RouterPlugin.routeSetup(app);
ListenPlugin.listen(app);
