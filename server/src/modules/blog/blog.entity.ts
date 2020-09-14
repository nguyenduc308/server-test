import { ID_SLUG_SEPARATOR } from 'src/constants';
import { cleanAccents } from 'src/helper/string-transform.helper';
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'blog' })
export class BlogEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  genarateSlugFromTitle() {
    this.slug = cleanAccents(this.title)
      .toLowerCase()
      .split(' ')
      .concat([ID_SLUG_SEPARATOR + this.id])
      .join('-');
  }
}
