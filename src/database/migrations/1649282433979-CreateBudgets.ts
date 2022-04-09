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
                        name: "min",
                        type: "varchar",
                    },
                    {
                        name: "max",
                        type: "varchar",
                    },
                    {
                        name: "budget_base",
                        type: "uuid",
                    },
                    {
                        name: "inverter",
                        type: "varchar",
                    },
                    {
                        name: "module",
                        type: "varchar",
                    },
                    {
                        name: "module_qtd",
                        type: "varchar",
                    },
                    {
                        name: "materials",
                        type: "varchar",
                    },
                    {
                        name: "gift",
                        type: "varchar",
                    },
                    {
                        name: "installation",
                        type: "varchar",
                    },
                    {
                        name: "standard",
                        type: "varchar",
                    },
                    {
                        name: "freight",
                        type: "varchar",
                    },
                    {
                        name: "total_coast",
                        type: "varchar",
                    },
                    {
                        name: "margin",
                        type: "varchar",
                    },
                    {
                        name: "nf",
                        type: "varchar",
                    },
                    {
                        name: "fiscal_coast",
                        type: "varchar",
                    },
                    {
                        name: "commission",
                        type: "varchar",
                    },
                    {
                        name: "real_margin",
                        type: "varchar",
                    },
                    {
                        name: "full_price",
                        type: "varchar",
                    },
                    {
                        name: "discount_percentage",
                        type: "varchar",
                    },
                    {
                        name: "discount_real",
                        type: "varchar",
                    },
                    {
                        name: "price_discount",
                        type: "varchar",
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