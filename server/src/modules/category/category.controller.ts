import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';

@Controller('/categories')
export class CategoryController {
  constructor(private _catService: CategoryService) {}

  @Get()
  getCategories(): Promise<CategoryEntity[]> {
    return this._catService.getCategories();
  }

  @Get(':slug')
  getCategoryBySlug(@Param('slug') slug: string): Promise<CategoryEntity> {
    return this.getCategoryBySlug(slug);
  }

  @Post()
  createCategory(@Body() data: CreateCategoryDTO): Promise<CategoryEntity> {
    return this._catService.createCategory(data);
  }

  @Patch(':slug')
  updateCategoryBySlug(
    @Param('slug') slug: string,
    @Body() data: UpdateCategoryDTO,
  ): Promise<CategoryEntity> {
    return this._catService.updateCategoryBySlug(slug, data);
  }

  @Delete(':slug')
  deleteCategoryByslug(@Param('slug') slug: string): Promise<any> {
    return this._catService.deleteCategoryBySlug(slug);
  }
}
