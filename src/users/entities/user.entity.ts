import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { Exclude } from "class-transformer";

export class UserEntity implements User {
    @ApiProperty()
    fullName: string;

    @ApiProperty()
    id: number;

    @ApiProperty()
    username: string;

    @Exclude()
    password: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    role: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
