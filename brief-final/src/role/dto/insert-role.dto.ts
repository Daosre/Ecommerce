import { IsNotEmpty, IsString, isString } from "class-validator";

export class InsertRole {
    @IsString()
    @IsNotEmpty()
    name: string
}