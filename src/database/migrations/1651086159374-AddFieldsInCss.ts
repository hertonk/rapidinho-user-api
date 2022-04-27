import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddFieldsInCss1651086159374 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('css', new TableColumn({
            name: 'post',
            type: 'varchar',
            isNullable: true
        }));

        await queryRunner.addColumn('css', new TableColumn({
            name: 'transformer',
            type: 'varchar',
            isNullable: true
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('css', 'post');

        await queryRunner.dropColumn('css', 'transformer');
        
    }

}
