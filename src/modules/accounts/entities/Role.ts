import { randomUUID } from "crypto";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn("uuid")
  public id?: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @CreateDateColumn({ name: "created_at" })
  public createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt?: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  public deletedAt?: Date | null;

  constructor(name: string, description: string) {
    this.id = randomUUID();
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
    this.updatedAt = new Date();

    this.deletedAt = null;
  }
}
