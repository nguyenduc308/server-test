import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateCategoryDTO {
  @IsNotEmpty()
  title: string;

  @IsEmpty()
  slug;

  description?: string;
}

export class UpdateCategoryDTO {
  @IsEmpty()
  slug;

  title?: string;
  description?: string;
}
