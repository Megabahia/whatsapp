import { Service } from "typedi";
import Validator from "validatorjs";
import { ValidatorRes } from "./validator.types";
import { Errors } from "../../utils/errors/errors.utils.helpers";
import { getAsyncValidationResponse } from "../../utils/common/common.utils";
import { CountryEntity } from "../entities/Country.entity";

@Service()
export default class CountryValidator {
  async create(payload: CountryEntity) {
    return new Promise<ValidatorRes>((resolve, reject) => {
      const errorCode = Errors.deleteEntity.code;
      const rules = {
        name: `required|string|max:250`,
        externalId: `string|max:15`,
        additionalInfo: `number`,
        parameters: `number`
      };

      const validation = new Validator(payload, rules);
      const sendResponse = () =>
        getAsyncValidationResponse(validation, errorCode, resolve, reject);
      validation.checkAsync(sendResponse, sendResponse);
    });
  }
}
