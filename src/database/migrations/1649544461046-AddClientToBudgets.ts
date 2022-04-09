import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddClientToBudgets1649544461046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('budgets', new TableColumn({
            name: 'client_id',
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('budgets', new TableForeignKey({
            name: 'ClientBudget',
            columnNames: ['client_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'clients',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('budgets', 'client_id');
        
    }

}