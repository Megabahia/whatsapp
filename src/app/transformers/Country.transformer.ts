import { Service } from "typedi";
import { CountryEntity } from "../entities/Country.entity";

@Service()
export default class CountryTransformer {
  public transform = (country: CountryEntity) => {
    return {
      id: country.id,
      name: country.name,
      externalId: country.externalId,
      additionalInfo: country.additionalInfo,
      parameters: country.parameters
    };
  };
}
