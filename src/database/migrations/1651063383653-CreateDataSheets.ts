import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDataSheets1651063383653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "datasheets",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: 'uuid_generate_v4()'
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "filepdf",
                type: "varchar",
              },
              {
                name: "fileimage",
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
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("datasheets");
      }
    }
