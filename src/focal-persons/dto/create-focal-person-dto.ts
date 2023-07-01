import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFocalPersonDto {
    @ApiProperty({
        description: "Name of focal person",
        example: "U Mya",
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "Focal Person's phone number",
        example: "09123456789"
    })
    @IsString()
    phone: string;

    @ApiProperty({
        description: "Focal Person's email",
        example: "umya@gmail.com"
    })
    @IsString()
    email: string;

    @ApiProperty({
        description: "Focal Person's position",
        example: "Head of department"
    })
    @IsString()
    position: string;
}
