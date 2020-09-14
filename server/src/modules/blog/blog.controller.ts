import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBlogDTO, UpdateBlogDTO } from './blog.dto';
import { BlogEntity } from './blog.entity';
import { BlogService } from './blog.service';

@Controller('/blogs')
export class BlogController {
  constructor(private _blogService: BlogService) {}

  @Get()
  getBlogs(): Promise<BlogEntity[]> {
    return this._blogService.getBlogs();
  }

  @Get(':slug')
  getBlogBySlug(@Param('slug') slug: string): Promise<BlogEntity> {
    return this._blogService.getBlogBySlug(slug);
  }

  @Post()
  createBlog(@Body() data: CreateBlogDTO): Promise<BlogEntity> {
    return this._blogService.createBlog(data);
  }

  @Patch(':slug')
  updateBlogBySlug(
    @Param('slug') slug: string,
    @Body() data: UpdateBlogDTO,
  ): Promise<BlogEntity> {
    return this._blogService.updateBlog(slug, data);
  }

  @Delete(':slug')
  deleteBlogBySlug(@Param('slug') slug: string): Promise<any> {
    return this._blogService.deleteBlogBySlug(slug);
  }
}
