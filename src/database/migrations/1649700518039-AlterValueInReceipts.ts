import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterValueInReceipts1649700518039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('receipts', 'value');

        await queryRunner.addColumn('receipts', new TableColumn({
            name: 'value',
            type: 'varchar',
            isNullable: true
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('receipts', 'value');
        
    }

}
