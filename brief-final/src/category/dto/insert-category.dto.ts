import { IsNotEmpty, IsString, IsUUID, MaxLength, MinLength } from "class-validator";


export class InsertCategoryDto {
 
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(255)
    name: string

}

export class UpdateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(255)
    name: string
}