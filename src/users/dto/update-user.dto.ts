import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        maxLength: 50,
        description: "User Full Name",
        example: "Super Admin",
    })
    @IsString()
    @Optional()
    fullName?: string;

    @ApiProperty({
        maxLength: 25,
        description: "Login User Name. Not Allow Spaces",
        example: "superadmin",
    })
    @IsString()
    @Optional()
    username?: string;
}
