import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { CreateBlogDTO, UpdateBlogDTO } from './blog.dto';
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
    return await newBlog.save();
  }

  async updateBlog(slug: string, data: UpdateBlogDTO): Promise<BlogEntity> {
    const foundBlog = await this.getBlogBySlug(slug);
    Object.keys(data).forEach(key => {
      foundBlog[key] = data[key];
    });
    return await foundBlog.save();
  }

  async deleteBlogBySlug(slug): Promise<DeleteResult> {
    const findBlog = await this.getBlogBySlug(slug);
    return await this._blogRepo.delete(findBlog);
  }
}
