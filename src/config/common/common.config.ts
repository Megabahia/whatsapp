// Common server configurations
import { Express } from "express";
import bodyParser from "body-parser";
import { initCustomValidators } from "../validators/validators.config";


import rules from "../../app/rules/index.rules";

export const applyConfig = (app: Express) => {

  // Disable the express header
  app.disable("x-powered-by");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // Init custom validators to be available
  initCustomValidators(rules);
};
