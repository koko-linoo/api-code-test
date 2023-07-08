import { PartialType } from '@nestjs/mapped-types';
import { CreateTownshipDto } from './create-township-dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTownshipDto extends PartialType(CreateTownshipDto) {
    @ApiProperty({
        description: "Name of Township",
        example: "North Dagon",
    })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({
        description: "Related State Division Id",
        example: 1,
    })
    @IsNumber()
    @IsOptional()
    stateId?: number;
}
