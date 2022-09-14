// Custom namespace declarations and overrides
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Auth } from "./types/user.types";

declare global {
  namespace Express {
    export interface Request {
      auth?: Auth;
    }
  }
}
