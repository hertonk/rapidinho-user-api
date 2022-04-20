import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTensionsCss1650489522049 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tensions-css',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "tension_id",
                        type: "uuid",
                    },
                    {
                        name: "css_id",
                        type: "uuid",
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

        await queryRunner.createForeignKey('tensions-css', new TableForeignKey({
            name: 'CssTension',
            columnNames: ['css_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'css',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));

        await queryRunner.createForeignKey('tensions-css', new TableForeignKey({
            name: 'TensionCss',
            columnNames: ['tension_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tensions',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tensions-css');
    }

}
