import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";


export class CreateUserDto {
  @ApiProperty({example: 'user@mail.ru', description: 'mail'})
  @IsString({message: 'to be string'})
  @IsEmail({},{message: 'uncorrect email'})
  readonly email: string
  @ApiProperty({example: '1234', description: 'pass'})
  @IsString({message: 'to be string'})
  @Length(4, 16, {message: 'gt 4, lt: 16'})
  readonly password: string
}