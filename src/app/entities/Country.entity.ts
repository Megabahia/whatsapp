import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { IParameters } from "./types/country/types";

@Entity({ name: "countries" })
export class CountryEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", length: 150, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  externalId: string;

  @Column({ type: "json", nullable: true })
  additionalInfo: JSON;

  @Column({ type: "json", nullable: true })
  parameters: IParameters;

  @CreateDateColumn({ type: "timestamp", nullable: false, select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true, select: false })
  updatedAt: Date;

  @Column({ type: "timestamp", nullable: true, select: false })
  deletedAt: Date;
}
