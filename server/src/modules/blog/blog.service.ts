import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlogDTO } from './blog.dto';
import { BlogEntity } from './blog.entity';
import { BlogRepository } from './blog.repository';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogRepository) private _blogRepo: BlogRepository,
  ) {}

  async getBlogs(): Promise<BlogEntity[]> {
    return await this._blogRepo.find();
  }

  async getBlogBySlug(slug: string): Promise<BlogEntity> {
    const foundBlog = await this._blogRepo.findOne({ slug });
    if (!foundBlog) {
      throw new NotFoundException('Blog not found');
    }
    return foundBlog;
  }

  async createBlog(data: CreateBlogDTO): Promise<BlogEntity> {
    const newBlog = await this._blogRepo.create(data);
    await newBlog.save();
    return newBlog;
  }
}
