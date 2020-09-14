import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  host: 'localhost',
  type: 'mysql',
  port: 3306,
  username: 'root',
  password: 'abc123',
  database: 'blog',
  entities: [__dirname + '../../**/*.entity.{ts,js}'],
  synchronize: true,
};
