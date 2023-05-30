import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsNumber()
    categoryId: number;

    @IsString()
    benefit: string;

    @IsString()
    @IsOptional()
    imageUrl?: string;

    @IsNumber()
    createdUser: number;
}
