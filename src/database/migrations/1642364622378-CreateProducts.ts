import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateProducts1642364622378 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
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
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "code",
                        type: "varchar",
                    },
                    {
                        name: "photo",
                        type: "varchar",
                    },
                    {
                        name: "unit",
                        type: "varchar",
                    },
                    {
                        name: "value",
                        type: "decimal(5,2)",
                    },
                    {
                        name: "stock",
                        type: "int",
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

        await queryRunner.addColumn('products', new TableColumn({
            name: 'manufacturer', 
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('products', new TableForeignKey({
            name: 'ProductsManufacturer',
            columnNames: ['manufacturer'],
            referencedColumnNames: ['id'],
            referencedTableName: 'manufacturers',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));

        await queryRunner.addColumn('products', new TableColumn({
            name: 'category', 
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('products', new TableForeignKey({
            name: 'ProductsCategory',
            columnNames: ['category'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
