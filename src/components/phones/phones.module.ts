import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './entities/phone';
import { PhoneDetail } from './entities/phoneDetail';
import { PhonesResolver } from './phones.resolver';
import { PhonesService } from './phones.service';

@Module({
  imports: [TypeOrmModule.forFeature([Phone, PhoneDetail])],
  providers: [PhonesService, PhonesResolver],
  exports: [PhonesService],
})
export class PhonesModule {}
