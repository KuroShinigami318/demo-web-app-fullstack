import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Phone } from "./phone";

@Entity({ name: "chitietsp" })
@ObjectType()
export class PhoneDetail {
    @PrimaryGeneratedColumn()
    @Field()
    maCT: number;
    
    @Column({ type: "varchar", length: 50 })
    @Field()
    maDM: string;

    @Column({ type: "varchar", length: 11 })
    @Field()
    Size: string;

    @Column({ type: "varchar", length: 11 })
    @Field()
    Weight: string;

    @Column({ type: "varchar", length: 20 })
    @Field()
    Color: string;

    @Column({ type: "varchar", length: 11 })
    @Field()
    BoNhoTrong: string;

    @Column({ type: "varchar", length: 11 })
    @Field()
    BoNho: string;

    @Column({ type: "varchar", length: 10 })
    @Field()
    HDH: string;

    @Column({ type: "varchar", length: 10 })
    @Field()
    CamTruoc: string;

    @Column({ type: "varchar", length: 10 })
    @Field()
    CamSau: string;

    @Column({ type: "varchar", length: 11 })
    @Field()
    Pin: string;

    @Column({ type: "varchar", length: 20 })
    @Field()
    BaoHanh: string;

    @Column({ type: "varchar", length: 20 })
    @Field()
    TinhTrang: string;

    @Column({ type: "datetime" })
    @Field()
    ngayNhapHang: string;

    @Column({ type: "varchar", length: 50 })
    @Field()
    HinhAnh: string;

    @Column({ type:"int" })
    @Field()
    maSP: number;

    @OneToOne(() => Phone, phone => phone.phoneDetail)
    @JoinColumn({ name: "maSP" })
    phone: Phone
}