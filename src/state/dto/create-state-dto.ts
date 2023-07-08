import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateStateDto {
    @ApiProperty({
        description: "Name of State",
        example: "Yangon",
    })
    @IsString()
    name: string;
}
