import { User } from "@prisma/client";

export class UserEntity implements User {
    fullName: string;
    id: number;
    username: string;
    password: string;
    status: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}
