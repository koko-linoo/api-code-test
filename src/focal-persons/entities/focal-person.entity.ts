import { ApiProperty } from "@nestjs/swagger";
import { FocalPerson } from "@prisma/client";

export class FocalPersonEntity implements FocalPerson {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    position: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
