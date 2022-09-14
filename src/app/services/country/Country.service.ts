// import { IUser } from "src/app/models/types/country/types";
// import User from "src/app/models/User";
// import UserValidator from "src/app/validators/User.validator";
// // import moment from "moment";
import {Inject, Service} from "typedi";
import CountryValidator from "../../validators/Country.validator";
import {WhatsappProvider} from "../../providers/whatsapp/Whatsapp.provider";
// // import bcrypt from "bcryptjs";
// // import UserValidator from "../../validators/User.validator";
// import CountryRepository from "../../repositories/User.repository";
// // import User from "../../models/User";
//
@Service()
export default class CountryService {
  // @Inject(type => CountryRepository)
  // userRepository: CountryRepository;
  @Inject(type => CountryValidator)
  countryValidator: CountryValidator;
  @Inject(type => WhatsappProvider)
  whatsappProvider: WhatsappProvider;

  //
  async getAll(phone: string) {
    console.log('phone', phone);
    // await this.whatsappProvider.sendMessage();
    await this.whatsappProvider.sendTemplate(phone);
    // await CountryRepository.find();
    // return await CountryRepository.find();
  }

  //

  //
  //   async create(user: IUser) {
  //     await this.userValidator.create(user);
  //     const newUser = new User(user);
  //     const savedUser = await newUser.save();
  //     // user.password = bcrypt.hashSync(user.password, 10);
  //     return savedUser;
  //   }
  //
  //   // async update(userId: number, user: User) {
  //   //   await this.userValidator.update(user, userId);
  //   //   const foundUser = await userRepository.findOneOrFail(userId);
  //   //   if (user.password) user.password = bcrypt.hashSync(user.password, 10);
  //
  //   //   const mergedUser = {
  //   //     ...foundUser,
  //   //     ...user
  //   //   } as User;
  //   //   await userRepository.save(mergedUser);
  //   //   return await userRepository.findOneOrFail({
  //   //     where: { id: userId },
  //   //     relations: ["role", "company"]
  //   //   });
  //   // }
  //
  //   // async delete(userId: number) {
  //   //   await this.userValidator.getOne(userId);
  //   //   const foundUser = await userRepository.findOneOrFail(userId);
  //   //   foundUser.deletedAt = moment().toDate();
  //   //   return await userRepository.save(foundUser);
  //   // }
}
