import { PartialType } from '@nestjs/mapped-types';
import { CreateTargetPersonDto } from './create-target-person-dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTargetPersonDto extends PartialType(CreateTargetPersonDto) {
    @ApiProperty({
        description: "Name of TargetPerson",
        example: "Over 18",
    })
    @IsString()
    @IsOptional()
    name?: string;
}
