import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        maxLength: 50,
        description: "User Full Name",
        example: "Super Admin",
    })
    @IsString()
    fullName: string;

    @ApiProperty({
        maxLength: 25,
        description: "Login User Name. Not Allow Spaces",
        example: "superadmin",
    })
    @IsString()
    username: string;

    @ApiProperty({
        maximum: 255,
        description: "Password shoud be at least 8 number, character",
        example: "P@ssw0rd#1",
    })
    @IsString()
    password: string;
}
