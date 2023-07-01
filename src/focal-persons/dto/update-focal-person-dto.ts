import { PartialType } from '@nestjs/mapped-types';
import { CreateFocalPersonDto } from './create-focal-person-dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFocalPersonDto extends PartialType(CreateFocalPersonDto) {
    @ApiProperty({
        description: "Name of focal person",
        example: "U Mya",
    })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({
        description: "Focal Person's phone number",
        example: "09123456789"
    })
    @IsString()
    @IsOptional()
    phone?: string;

    @ApiProperty({
        description: "Focal Person's email",
        example: "umya@gmail.com"
    })
    @IsString()
    @IsOptional()
    email?: string;

    @ApiProperty({
        description: "Focal Person's position",
        example: "Head of department"
    })
    @IsString()
    @IsOptional()
    position?: string;
}
