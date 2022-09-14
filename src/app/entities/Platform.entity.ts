import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity({ name: "platforms" })
export class Platform {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", length: 150, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  whatsappBusinessId: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  phoneId: string;

  @Column({ type: "varchar", length: 25, nullable: false })
  appId: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  appToken: string;

  @CreateDateColumn({ type: "timestamp", nullable: false, select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true, select: false })
  updatedAt: Date;

  @Column({ type: "timestamp", nullable: true, select: false })
  deletedAt: Date;
}
