import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateTownshipDto {
    @ApiProperty({
        description: "Name of Township",
        example: "South Dagon",
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "Related State Division Id",
        example: 1,
    })
    @IsNumber()
    stateId: number;
}
