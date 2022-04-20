import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterProjects1650475083274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('projects', 'category');

        await queryRunner.dropColumn('projects', 'invoice_credit_clearing');

        await queryRunner.addColumn('projects', new TableColumn({
            name: 'invoice_credit_clearing',
            type: 'varchar',
            isNullable: true
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('projects', 'invoice_credit_clearing');
    }

}
