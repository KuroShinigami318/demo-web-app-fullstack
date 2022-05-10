import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewPhoneInput } from './dto/new-phone.input';
import { NewPhoneDTInput } from './dto/new-phoneDT.input';
import { Phone } from './entities/phone';
import { PhoneDetail } from './entities/phoneDetail';

@Injectable()
export class PhonesService {

    constructor(@InjectRepository(Phone) private phoneRepository: Repository<Phone>, @InjectRepository(PhoneDetail) private phoneDetailRepository: Repository<PhoneDetail>) {

    }

    public async getPhones(): Promise<Phone[]> {
        return this.phoneRepository.createQueryBuilder("phone").innerJoinAndSelect("phone.phoneDetail", "phoneDetail").skip(0).take(6).getMany().catch((err) => {
            throw new Error(err);
        });
        /*return this.phoneRepository.find({ relations: ["phoneDetail"] }).catch((err) => {
            throw new Error(err);
        });*/
    }

    public async getPhone(maSp: number):Promise<Phone> {
        return await this.phoneRepository.createQueryBuilder("phone").innerJoinAndSelect("phone.phoneDetail", "phoneDetail","phone.maSP = :id", { id: maSp }).getOne().catch((err) => {
            console.log(err);
            return null;
        });
    }

    public async getDetail(masP: number): Promise<PhoneDetail> {
        return await this.phoneDetailRepository.findOne({ maSP: masP }).catch((err) => {
            throw err;
        });
    }

    public async addPhone(newPhoneData: NewPhoneInput, newPhoneDTData: NewPhoneDTInput): Promise<Phone> {
        const newPhone = this.phoneRepository.create(newPhoneData);
        let newPhoneDT = this.phoneDetailRepository.create(newPhoneDTData);
        newPhoneDT.phone = newPhone;
        await this.phoneRepository.save(newPhone).catch((err) => {
            throw err;
        });
        await this.phoneDetailRepository.save(newPhoneDT).catch((err) => {
            this.phoneRepository.remove(newPhone);
            throw err;
        });

        return newPhone;
    }

    public async deletePhone(maSP: number): Promise<boolean> {
        const phoneToRemove = await this.phoneRepository.findOne({ maSP: maSP });
        const phoneDT = await this.phoneDetailRepository.findOne({ phone: phoneToRemove });
        await this.phoneDetailRepository.remove(phoneDT).catch((err) => {
            console.log(err);
            return false;
        });
        await this.phoneRepository.remove(phoneToRemove).catch(err => {
            console.log(err);
            return false;
        })
        return true;
    }
}
