import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { CreateCategoryDTO } from './category.dto';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository) private _catRepo: CategoryRepository,
  ) {}

  async getCategories(): Promise<CategoryEntity[]> {
    return await this._catRepo.find();
  }

  async getCategoryBySlug(slug: string): Promise<CategoryEntity> {
    const foundCategory = await this._catRepo.findOne({ slug });
    if (!foundCategory) {
      throw new NotFoundException('Category not found');
    }
    return foundCategory;
  }

  async createCategory(data: CreateCategoryDTO): Promise<CategoryEntity> {
    const category = await this._catRepo.create(data);
    return await category.save();
  }

  async updateCategoryBySlug(slug, data): Promise<CategoryEntity> {
    const foundCategory = await this.getCategoryBySlug(slug);
    Object.keys(data).forEach((key: string) => {
      foundCategory[key] = data[key];
    });
    return await foundCategory.save();
  }

  async deleteCategoryBySlug(slug): Promise<DeleteResult> {
    const foundCategory = await this.getCategoryBySlug(slug);
    return await this._catRepo.delete(foundCategory);
  }
}
