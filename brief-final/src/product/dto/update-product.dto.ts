import { IsNotEmpty, IsNumber, IsString, IsUUID, Max, MaxLength, Min, MinLength } from "class-validator"

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(255)
    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(255)
    description: string

    @IsNumber()
    @IsNotEmpty()
    @Min(2)
    @Max(200)
    quantity: number

    @IsNumber()
    @IsNotEmpty()
    @Min(2)
    @Max(200)
    price: number

    @IsString()
    @IsNotEmpty()
    image: string

    @IsUUID()
    @IsString()
    @IsNotEmpty()
    category: string
    
}