import {MigrationInterface, QueryRunner} from "typeorm";

export class DropPathInFiles1649960187943 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('files', 'path');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
