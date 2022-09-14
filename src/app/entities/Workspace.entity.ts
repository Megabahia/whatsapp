import {
  Entity,
  Column,
  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from "typeorm";

@Entity({ name: "workspace" })
export class WorkspaceEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", length: 90, nullable: false })
  code: string;

  @Column({ type: "varchar", length: 90, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  url: string;

  @CreateDateColumn({ type: "timestamp", nullable: false, select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true, select: false })
  updatedAt: Date;

  @Column({ type: "timestamp", nullable: true, select: false })
  deletedAt: Date;
}
