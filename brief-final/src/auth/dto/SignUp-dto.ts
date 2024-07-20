import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class SignUpDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    name: string

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string

    @IsStrongPassword()
    @IsNotEmpty()
    @MaxLength(255)
    password: string
}