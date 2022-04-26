import {MigrationInterface, QueryRunner} from "typeorm";

export class EditProducts1650982578389 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products', 'name');
        await queryRunner.dropColumn('products', 'photo');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
