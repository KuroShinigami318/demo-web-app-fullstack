import { Module } from "@nestjs/common";
import { PhonesModule } from "./phones/phones.module";

@Module({
    imports: [PhonesModule]
})

export class ComponentsModule {}