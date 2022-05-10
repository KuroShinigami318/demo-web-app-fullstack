import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PhoneDetail } from "./phoneDetail";

@Entity({ name: "sanpham" })
@ObjectType()
export class Phone {
    @PrimaryGeneratedColumn()
    @Field()
    maSP: number;
    
    @Column({ type: "varchar", length: 50 })
    @Field()
    tenSp: string;

    @Column({ type: "varchar", length: 50 })
    @Field()
    MoTa: string;

    @Column({ type: "int" })
    @Field()
    GiaCa: number;

    @Column({ type: "int" })
    @Field()
    SL: number;

    @OneToOne(() => PhoneDetail, phoneDetail => phoneDetail.phone)
    @Field()
    phoneDetail: PhoneDetail;
}