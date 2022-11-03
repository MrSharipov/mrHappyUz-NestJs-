import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateItemDto {
    
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    img?: string;

    @IsNotEmpty()
    @IsString()
    desc: string;
}