import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './datasource/typeOrm.config';
import { BlogModule } from './modules/blog/blog.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BlogModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
