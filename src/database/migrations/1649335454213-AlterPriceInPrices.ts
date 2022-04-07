import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterPriceInPrices1649335454213 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('prices', 'value');

        await queryRunner.addColumn('prices', new TableColumn({
            name: 'value',
            type: 'varchar',
            isNullable: true
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('prices', 'value');
        
    }

}
