import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewPhoneInput } from './dto/new-phone.input';
import { NewPhoneDTInput } from './dto/new-phoneDT.input';
import { Phone } from './entities/phone';
import { PhoneDetail } from './entities/phoneDetail';
import { PhonesService } from './phones.service';

@Resolver()
export class PhonesResolver {
  constructor(private phonesService: PhonesService) {}

  @Query((returns) => [Phone])
  public async phones(): Promise<Phone[]> {
    return await this.phonesService.getPhones().catch((err) => {
      throw err;
    });
  }

  @Query(returns => PhoneDetail)
  public async getDetail(@Args('maSP', {type:() => Int}) maSP: number): Promise<PhoneDetail> {
    return await this.phonesService.getDetail(maSP).catch((err) => {
      throw err;
    });
  }

  @Query(returns => Phone)
  public async getPhone(@Args('maSP', {type: () => Int}) maSP: number): Promise<Phone> {
    return await this.phonesService.getPhone(maSP).catch((err) => {
      throw err;
    });
  }

  @Mutation(returns => Phone)
  public async addNewPhone(@Args("newPhoneData") newPhoneData: NewPhoneInput, @Args("newphoneDTData") newPhoneDT: NewPhoneDTInput): Promise<Phone> {
    return await this.phonesService.addPhone(newPhoneData, newPhoneDT).catch((err) => {
      throw err;
    });
  }

  @Mutation(returns => Boolean)
  public async deletePhone(@Args("maSP") maSP: number): Promise<boolean> {
    return await this.phonesService.deletePhone(maSP);
  }
  
}
