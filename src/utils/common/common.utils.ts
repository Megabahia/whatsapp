// Common utilities that are normally use in a server application
import moment from "moment";
import { Express } from "express";
import { Validator } from "validatorjs";

import { MiddlewareWrapper } from "./common.utils.types";
import { Route } from "../../routes/routes.types";
import { HTTPError } from "../errors/errors.utils";
import asyncWrapper from "async-wrapper-express-ts";
import { transformValidationErrors } from "../errors/errors.utils.helpers";

export const getPort = () => {
  const normalizePort = (port: string) => parseInt(port, 10);
  return normalizePort(process.env.PORT || "5000");
};

export const applyMiddlewares = (
  app: Express,
  middlewareWrappers: MiddlewareWrapper[]
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(app);
  }
};

export const applyRoutes = (app: Express, routes: Route[]) => {
  const version = process.env.API_VERSION;
  for (const route of routes) {
    const { method, path, middlewares, handler } = route;
    const enhancedPath = `/api/${version}${path}`;
    app[method](enhancedPath, ...middlewares, asyncWrapper(handler));
  }
};

export const getAsyncValidationResponse = (
  validation: Validator<any>,
  errorCode: string,
  resolve: Function,
  reject: Function
) => {
  const formattedErrors = transformValidationErrors(validation.errors);
  if (validation.errorCount > 0) {
    // TODO: Registrar error en log
    reject(new HTTPError(formattedErrors));
  }
  resolve();
};

export const toSnakeCase = (str: string) => {
  return str.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);
};

export const enumToString = (object: object) => {
  const arrayObject = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      arrayObject.push(key);
    }
  }
  return arrayObject.toString();
};

export const isPersonalPhoneNumber = (phone: string) => {
  const regex = /(^09\d{8}$)|(^0[2-7]\d{7}$)/;
  return regex.test(phone);
};

export const isValidMoment = (date: string) => {
  return moment(date).isValid();
};

export const addslashes = (str: string) => {
  return (str + "").replace(/[\\"']/g, "\\$&").replace(/\u0000/g, "\\0");
};

export const toUnderScore = (str?: string) => {
  if (str) {
    return str
      .replace(/(?:^|\.?)([A-Z])/g, (x, y) => "_" + y.toLowerCase())
      .replace(/^_/, "");
  } else {
    return null;
  }
};
