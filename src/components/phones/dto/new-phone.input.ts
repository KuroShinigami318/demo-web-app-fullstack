import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@InputType()
export class NewPhoneInput {
    @Field()
    tenSp: string;

    @Field()
    MoTa: string;

    @Field(() => Int)
    @Max(900000000, {message: "Price can't be that high"})
    @Min(1000, {message: "Price can't be that low"})
    GiaCa: number;

    @Field(() => Int)
    SL: number;
}