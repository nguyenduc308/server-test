import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateBlogDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsEmpty()
  slug;
}
export class UpdateBlogDTO {
  title?: string;
  content?: string;

  @IsEmpty()
  slug;
}
