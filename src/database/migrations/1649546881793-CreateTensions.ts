import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTensions1649546881793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
                        name: "css_id",
                        type: "uuid",
                    },
                    {
                        name: "tension",
                        type: "varchar",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        );

        await queryRunner.createForeignKey('tensions', new TableForeignKey({
            name: 'CssTension',
            columnNames: ['css_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'css',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
        
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tensions');
    }

}
