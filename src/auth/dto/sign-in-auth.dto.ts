import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class SignInAuthDto {
    @IsString()
    @ApiProperty({
        example: "admin",
        description: "user name usually lowercase and no space",
    })
    username: string;

    @IsString()
    @ApiProperty({
        example: "password#1",
        description: "password usually minimum 8 letters, characters and digits",
    })
    password: string;
}

export class SignInAuthResponseDto {
    @IsString()
    @ApiProperty({
        description: "login jwt token"
    })
    accessToken: string;
}
