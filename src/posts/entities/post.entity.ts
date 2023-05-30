import { Post, } from "@prisma/client";

export class PostEntity implements Post {
    imageUrl: string;
    createdUser: number;
    benefit: string | null
    title: string;
    content: string;
    categoryId: number;
    status: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
}
