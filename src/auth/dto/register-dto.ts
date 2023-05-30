import { IsString } from "class-validator";

export class RegisterAuthDto {
    @IsString()
    username: string;

    @IsString()
    password: string;
}
