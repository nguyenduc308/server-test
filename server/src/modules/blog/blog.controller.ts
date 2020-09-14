import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogEntity } from './blog.entity';
import { BlogService } from './blog.service';

@Controller('/blogs')
export class BlogController {
  constructor(private _blogService: BlogService) {}
  @Get()
  async getBlogs(): Promise<BlogEntity[]> {
    return this._blogService.getBlogs();
  }

  @Get(':slug')
  async getBlogBySlug(@Param('slug') slug: string): Promise<BlogEntity> {
    return this._blogService.getBlogBySlug(slug);
  }

  @Post()
  async createBlog(@Body() data: any): Promise<BlogEntity> {
    return this._blogService.createBlog(data);
  }
}
