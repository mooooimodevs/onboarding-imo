import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import type { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('media')
export class Media {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  filename: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: true })
  originalName: string;

  @ApiProperty()
  @Column()
  mimetype: string;

  @ApiProperty()
  @Column({ type: 'bigint', nullable: true })
  size: number;

  @ApiProperty({ nullable: true })
  @Column({ type: 'varchar', nullable: true })
  path: string;

  @ApiProperty({ nullable: true })
  @Column({ type: 'varchar', nullable: true })
  url: string;

  @ApiProperty({ nullable: true })
  @Column({ type: 'varchar', nullable: true })
  driveId: string;

  @ApiProperty({ nullable: true })
  @Column({ type: 'varchar', nullable: true })
  webviewLink: string;

  @ApiProperty({ nullable: true })
  @Column({ type: 'int', nullable: true })
  userId: number;

  @ApiProperty()
  @Column({ default: false })
  isPrivate: boolean;

  @ManyToOne('User', 'media')
  @JoinColumn({ name: 'userId' })
  user: User;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  @Exclude()
  deletedAt: Date;
}
