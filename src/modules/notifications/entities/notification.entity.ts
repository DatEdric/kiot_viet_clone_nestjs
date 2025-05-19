import { UserEntity } from '@modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('notifications')
export class NotificationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.notifications, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ type: 'varchar', length: 100 })
  type: string;

  @Column({ name: 'is_read', default: false })
  isRead: boolean;

  @Column({ name: 'reference_id', nullable: true })
  referenceId: number;

  @Column({
    name: 'reference_type',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  referenceType: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
