import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddCreatedAtInTension1649956939203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tensions', new TableColumn({
            name: "created_at",
            type: "timestamp",
            default: "now()",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('tensions', 'created_at');
    }

}
