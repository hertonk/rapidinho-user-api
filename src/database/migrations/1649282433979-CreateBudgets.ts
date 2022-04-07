import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBudgets1649282433979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'budgets',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "project_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "venc",
                        type: "date",
                    },
                    {
                        name: "payment",
                        type: "date",
                    },
                    {
                        name: "desc",
                        type: "varchar",
                    },
                    {
                        name: "value",
                        type: "decimal(5,2)",
                    },
                    {
                        name: "status",
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
                ]
            })
        );
        
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('budgets');
    }

}