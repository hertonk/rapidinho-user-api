import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateClients1642062688494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'clients',
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
                        name: "nick",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "telephone",
                        type: "varchar",
                    },
                    {
                        name: "birthday",
                        type: "date",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "gender",
                        type: "varchar",
                    },
                    {
                        name: "obs",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "instagram",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "street",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "number",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "neighborhood",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "complement",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "city",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "state",
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

        await queryRunner.addColumn('clients', new TableColumn({
            name: 'brand', 
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('clients', new TableForeignKey({
            name: 'ClientBrand',
            columnNames: ['brand'],
            referencedColumnNames: ['id'],
            referencedTableName: 'brands',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));

        await queryRunner.addColumn('clients', new TableColumn({
            name: 'model', 
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('clients', new TableForeignKey({
            name: 'ClientModel',
            columnNames: ['model'],
            referencedColumnNames: ['id'],
            referencedTableName: 'models',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('clients', 'ClientBrand');

        await queryRunner.dropForeignKey('clients', 'ClientModel');
        
        await queryRunner.dropColumn('clients', 'brand');

        await queryRunner.dropColumn('clients', 'model');

        await queryRunner.dropTable('clients');
    }

}
