import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterClassInProjects1649683287593 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('projects', 'class');

        await queryRunner.addColumn('projects', new TableColumn({
            name: 'class1',
            type: 'varchar',
            isNullable: true
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('projects', 'class1');
        
    }

}
