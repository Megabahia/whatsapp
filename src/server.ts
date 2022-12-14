import "reflect-metadata";
import dotenvFlow from "dotenv-flow";
dotenvFlow.config();
import express from "express";
import {
  getPort,
  applyMiddlewares,
  applyRoutes
} from "./utils/common/common.utils";
import { applyConfig } from "./config/common/common.config";
import requestMiddlewares from "./middlewares/resquest.middlewares";
import responseMiddlewares from "./middlewares/response.middlewares";
import routes from "./routes/index.routes";

const app = express();

// Initial configurations
applyConfig(app);
// Requests middlewares
applyMiddlewares(app, requestMiddlewares);
// Routes
applyRoutes(app, routes);
// Responses middlewares
applyMiddlewares(app, responseMiddlewares);
const PORT = getPort();
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
