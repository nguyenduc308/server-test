import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateBlogDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsEmpty()
  slug: string;
}
