import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AlterTension1650489260752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tensions');
        
        await queryRunner.createTable(
            new Table({
                name: 'tensions',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "tension",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tensions');
    }

}
