// Common middlewares that are normally used in most server applications
import { Express } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "../../docs/swagger/swagger.json";
import CONSTANTS from "../../config/constants";

export const handleAPIDocs = (router: Router) => {
  router.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export const handleHelmet = (app: Express) => {
  app.use(helmet());
};

export const handleCors = (app: Express) => {
  const whitelist: Array<string | RegExp> = CONSTANTS.CORS.WHITELIST;
  app.use(
    cors({
      credentials: true,
      origin: whitelist,
      allowedHeaders: ["Authorization"],
      methods: ["GET", "PUT", "POST", "PATCH", "DELETE"]
    })
  );
};

export const handleBodyRequestParsing = (app: Express) => {
  app.use(parser.urlencoded({ extended: true }));
  app.use(parser.json({ limit: "5mb" }));
};

export const handleCompression = (app: Express) => {
  const env = app.get("env");
  if (env === "production") {
    app.use(compression());
  }
};
