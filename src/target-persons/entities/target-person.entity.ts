import { ApiProperty } from "@nestjs/swagger";
import { TargetPerson } from "@prisma/client";

export class TargetPersonEntity implements TargetPerson {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
