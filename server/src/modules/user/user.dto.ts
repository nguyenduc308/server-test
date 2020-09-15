import { IsEmail, IsEmpty, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsEmpty()
  roles;
}

export class UpdateUserDTO {
  @IsEmpty()
  email;

  @MinLength(6)
  password?: string;

  @IsEmpty()
  roles;
}
