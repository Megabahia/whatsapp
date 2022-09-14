import { Route, Methods } from "./routes.types";
import Container from "typedi";
import WhatsappController from "../app/controllers/WhatsappController";

const mainRoute = "/whatsapp";

export const whatsappRoutes: Route[] = [
  {
    path: `${mainRoute}/:phone`,
    method: Methods.GET,
    middlewares: [],
    handler: Container.get(WhatsappController).getAll
  },
  // {
  //   path: `${mainRoute}`,
  //   method: Methods.POST,
  //   middlewares: [

  //   ],
  //   handler: Container.get(UserController).create
  // },
  // {
  //   path: `${mainRoute}/:userId`,
  //   method: Methods.PUT,
  //   middlewares: [

  //   ],
  //   handler: Container.get(UserController).update
  // },
  // {
  //   path: `${mainRoute}/:userId`,
  //   method: Methods.DELETE,
  //   middlewares: [

  //   ],
  //   handler: Container.get(UserController).delete
  // }
];
