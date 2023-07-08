import { ApiProperty } from "@nestjs/swagger";
import { Township } from "@prisma/client";

export class TownshipEntity implements Township {
    @ApiProperty()
    stateId: number;

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
