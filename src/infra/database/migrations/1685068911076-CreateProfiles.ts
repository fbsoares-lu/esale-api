import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfiles1685068911076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "profiles",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: `uuid_generate_v4()`,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "file_id",
            type: "uuid",
          },
          {
            name: "bio",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            name: "fk_user_id_profiles",
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["file_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "files",
            name: "fk_file_id_profiles",
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("profiles");
  }
}
