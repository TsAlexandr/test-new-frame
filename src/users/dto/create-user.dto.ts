import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
  @ApiProperty({example: 'user@mail.ru', description: 'mail'})
  readonly email: string
  @ApiProperty({example: '1234', description: 'pass'})
  readonly password: string
}