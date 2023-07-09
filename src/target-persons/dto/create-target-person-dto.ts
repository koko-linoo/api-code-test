import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTargetPersonDto {
    @ApiProperty({
        description: "Name of TargetPerson",
        example: "Under 18",
    })
    @IsString()
    name: string;
}
