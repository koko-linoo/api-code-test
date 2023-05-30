import { Category } from "@prisma/client";

export class CategoryEntity implements Category {
    status: string;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    name: string;
}
