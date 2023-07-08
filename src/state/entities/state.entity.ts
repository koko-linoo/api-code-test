import { ApiProperty } from "@nestjs/swagger";
import { StateDivision } from "@prisma/client";

export class StateEntity implements StateDivision {
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
