import { IsEmail, IsNotEmpty, IsStrongPassword, MaxLength, isStrongPassword } from "class-validator";

export class SignInDto {
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string

    @IsNotEmpty()
    @MaxLength(255)
    password: string
}