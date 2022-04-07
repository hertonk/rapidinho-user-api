import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterPriceInPricesUsers1649335898948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('prices-users', 'value');

        await queryRunner.addColumn('prices-users', new TableColumn({
            name: 'value',
            type: 'varchar',
            isNullable: true
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('prices-users', 'value');
        
    }

}
