import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateItemDto {
    
    @IsOptional()
    @IsString()
    title?: string;

    @IsString()
    @IsOptional()
    img?: string;

    @IsOptional()
    @IsString()
    desc?: string;
}