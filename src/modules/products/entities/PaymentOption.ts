import { randomUUID } from "crypto";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("payment_options")
export class PaymentOption {
  @PrimaryGeneratedColumn("uuid")
  public id?: string;

  @Column()
  public type: string;

  @CreateDateColumn({ name: "created_at" })
  public createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt?: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  public deletedAt?: Date | null;

  constructor(type: string) {
    this.id = randomUUID();
    this.type = type;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.deletedAt = null;
  }
}
