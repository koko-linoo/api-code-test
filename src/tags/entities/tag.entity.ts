import { Tag } from "@prisma/client";

export class TagEntity implements Tag {
    categoryId: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    name: string;
}
