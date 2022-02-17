import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePayrolls1645104743338 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'payrolls',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "employee_id",
                        type: "uuid",
                    },
                    {
                        name: "company_id",
                        type: "uuid",
                    },
                    {
                        name: "employee_name",
                        type: "varchar",
                    },
                    {
                        name: "company_name",
                        type: "varchar",
                    },
                    {
                        name: "company_reg",
                        type: "varchar",
                    },
                    {
                        name: "role",
                        type: "varchar",
                    },
                    {
                        name: "cost_center",
                        type: "varchar",
                    },
                    {
                        name: "company_department",
                        type: "varchar",
                    },
                    {
                        name: "company_branch",
                        type: "varchar",
                    },
                    {
                        name: "admission_date",
                        type: "varchar",
                    },
                    {
                        name: "rubrik_name",
                        type: "varchar",
                    },
                    {
                        name: "rubrik_code",
                        type: "varchar",
                    },
                    {
                        name: "reference",
                        type: "varchar",
                    },
                    {
                        name: "event_value",
                        type: "varchar",
                    },
                    {
                        name: "event_type",
                        type: "varchar",
                    },
                    {
                        name: "salary",
                        type: "varchar",
                    },
                    {
                        name: "base_inss",
                        type: "varchar",
                    },
                    {
                        name: "base_irrf",
                        type: "varchar",
                    },
                    {
                        name: "base_fgts",
                        type: "varchar",
                    },
                    {
                        name: "month_fgts",
                        type: "varchar",
                    },
                    {
                        name: "level_irrf",
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

        await queryRunner.createForeignKey('payrolls', new TableForeignKey({
            name: 'EmployeePayrolls',
            columnNames: ['employee_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'employees',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));

        await queryRunner.createForeignKey('payrolls', new TableForeignKey({
            name: 'CompanyPayrolls',
            columnNames: ['company_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'companies',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('payrolls');
    }

}
