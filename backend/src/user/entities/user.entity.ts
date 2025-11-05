import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Posts } from 'src/posts/entities/post.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ type: 'enum', enum: ['Admin', 'User', 'Guest'], default: 'User' })
  role!: 'Admin' | 'User' | 'Guest';

  @CreateDateColumn()
  create_date!: Date;

  @UpdateDateColumn()
  update_date!: Date;

  @OneToMany(() => Posts, (post) => post.user_id)
  posts!: Posts[];
}
