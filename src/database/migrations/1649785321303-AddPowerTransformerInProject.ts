import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddPowerTransformerInProject1649785321303 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('projects', new TableColumn({
            name: 'power_transformer',
            type: 'varchar',
            isNullable: true
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('projects', 'power_transformer');
        
    }

}