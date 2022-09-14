import { Service } from "typedi";
import Validator from "validatorjs";

import { ValidatorRes } from "./validator.types";
import { Errors } from "../../utils/errors/errors.utils.helpers";
import { getAsyncValidationResponse } from "../../utils/common/common.utils";
import {WorkspaceEntity} from "../entities/Workspace.entity";

@Service()
export default class WorkspaceValidator {
  async create(payload: WorkspaceEntity) {
    return new Promise<ValidatorRes>((resolve, reject) => {
      // verify authentication and authorization
      const errorCode = Errors.deleteEntity.code;

      // payloadRules
      const rules = {
        name: `required|max:90`,
        code: "required",
      };

      const validation = new Validator(payload, rules);
      const sendResponse = () =>
        getAsyncValidationResponse(validation, errorCode, resolve, reject);
      validation.checkAsync(sendResponse, sendResponse);
    });
  }

  async update(payload: WorkspaceEntity, workspaceId: number) {
    return new Promise<ValidatorRes>((resolve, reject) => {
      // verify authentication and authorization
      const errorCode = Errors.deleteEntity.code;

      // payloadRules
      const rules = {
        name: `required|max:90|unique:task_queues,,id != ${workspaceId}\``,
        code: "required",
      };
      const validation = new Validator(payload, rules);
      const sendResponse = () =>
        getAsyncValidationResponse(validation, errorCode, resolve, reject);
      validation.checkAsync(sendResponse, sendResponse);
    });
  }
}
