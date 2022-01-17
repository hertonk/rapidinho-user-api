import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateModels1642062601971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'models',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "obs",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "photo",
                        type: "varchar",
                        isNullable: true,
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

        await queryRunner.addColumn('models', new TableColumn({
            name: 'brand', 
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('models', new TableForeignKey({
            name: 'ModelBrand',
            columnNames: ['brand'],
            referencedColumnNames: ['id'],
            referencedTableName: 'brands',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('models');
    }

}
