import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import CountryService from "../services/country/Country.service";
import CountryTransformer from "../transformers/Country.transformer";
// import UserService from "../services/user/User.service";
// import UserTransformer from "../transformers/User.transformer";

@Service()
export default class WhatsappController {
  @Inject(type => CountryService)
  countryService: CountryService;
  @Inject(type => CountryTransformer)
  countryTransformer: CountryTransformer;

  public getAll = async (req: Request, res: Response) => {
    const {phone} = req.params;
    const countries = await this.countryService.getAll(phone);
    // const transformedCountries = countries.map((country: any) =>
    //   this.countryTransformer.transform(country)
    // );
    // res.status(200).send(transformedCountries);
    res.sendStatus(200);
  };
  //

  //
  //   public create = async (req: Request, res: Response) => {
  //     const user: IUser = req.body;
  //     const createdUser = await this.userService.create(user);
  //     const response = this.userTransformer.transform(createdUser);
  //     res.status(200).send(response);
  //   };
  //
  //   // public update = async (req: Request, res: Response) => {
  //   //   const { userId } = req.params;
  //   //   const user: User = req.body;
  //   //   user.updatedUserId = res.locals.jwtPayload.id;
  //   //   const updatedUser = await this.userService.update(+userId, user);
  //   //   const response = this.userTransformer.transform(updatedUser);
  //   //   res.status(200).send(response);
  //   // };
  //
  //   // public delete = async (req: Request, res: Response) => {
  //   //   const { userId } = req.params;
  //   //   await this.userService.delete(+userId);
  //   //   res.status(204).send();
  //   // };
}
