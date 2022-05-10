import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class NewPhoneDTInput {
    @Field()
    maDM: string;

    @Field()
    Size: string;

    @Field()
    Weight: string;

    @Field()
    Color: string;

    @Field()
    BoNhoTrong: string;

    @Field()
    BoNho: string;

    @Field()
    HDH: string;

    @Field()
    CamTruoc: string;

    @Field()
    CamSau: string;

    @Field()
    Pin: string;

    @Field()
    BaoHanh: string;

    @Field()
    TinhTrang: string;

    @Field()
    ngayNhapHang: string;

    @Field()
    HinhAnh: string;
}