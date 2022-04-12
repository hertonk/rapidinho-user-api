import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterValueInPayments1649701510621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('payments', 'value');

        await queryRunner.addColumn('payments', new TableColumn({
            name: 'value',
            type: 'varchar',
            isNullable: true
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('payments', 'value');
        
    }

}
