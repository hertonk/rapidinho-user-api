import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterDescriptionInProduct1651084478998 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('products', 'description');

        await queryRunner.addColumn('products', new TableColumn({
            name: 'description',
            type: 'varchar',
            isNullable: true
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('products', 'description');
        
    }

}
