import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
} from 'typeorm';

@Entity('tracking_drone_logs')
export class TrackingDroneLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  //   eg. "Entered" or "Exited"
  drone_action!: string;

  @Column()
  bbox_x1!: number;

  @Column()
  bbox_y1!: number;

  @Column()
  bbox_x2!: number;

  @Column()
  bbox_y2!: number;

  @Column('float')
  confidence_score!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
