import { IsOptional } from "class-validator";

export class FilterProductDto {
    @IsOptional()
    minPrice: number

    @IsOptional()
    maxPrice: number
    
    @IsOptional()
    category: string

}