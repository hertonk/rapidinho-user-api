import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProjects1649276197494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'projects',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                    },
                    {
                        name: "distributor",
                        type: "varchar",
                    },
                    {
                        name: "fantasy_name",
                        type: "varchar",
                    },
                    {
                        name: "cpf_cnpj",
                        type: "varchar",
                    },
                    {
                        name: "rg",
                        type: "varchar",
                    },
                    {
                        name: "number_uc",
                        type: "varchar",
                    },
                    {
                        name: "telephone",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "invoice",
                        type: "varchar",
                    },
                    {
                        name: "credit_clearing",
                        type: "varchar",
                    },
                    {
                        name: "invoice_credit_clearing",
                        type: "varchar",
                    },
                    {
                        name: "latitude",
                        type: "varchar",
                    },
                    {
                        name: "longitude",
                        type: "varchar",
                    },
                    {
                        name: "cep",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "state_address",
                        type: "varchar",
                    },
                    {
                        name: "street",
                        type: "varchar",
                    },
                    {
                        name: "neighborhood",
                        type: "varchar",
                    },
                    {
                        name: "complement",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "varchar",
                    },
                    {
                        name: "transformer",
                        type: "varchar",
                    },
                    {
                        name: "class",
                        type: "varchar",
                    },
                    {
                        name: "ramal",
                        type: "varchar",
                    },
                    {
                        name: "connection",
                        type: "varchar",
                    },
                    {
                        name: "cable",
                        type: "varchar",
                    },
                    {
                        name: "category",
                        type: "varchar",
                    },
                    {
                        name: "disjuntor",
                        type: "varchar",
                    },
                    {
                        name: "tension",
                        type: "varchar",
                    },
                    {
                        name: "post",
                        type: "varchar",
                    },
                    {
                        name: "instalation",
                        type: "varchar",
                    },
                    {
                        name: "stringbox",
                        type: "varchar",
                    },
                    {
                        name: "module_manufacturer",
                        type: "varchar",
                    },
                    {
                        name: "module_model",
                        type: "varchar",
                    },
                    {
                        name: "module_qtd",
                        type: "varchar",
                    },
                    {
                        name: "module_obs",
                        type: "varchar",
                    },
                    {
                        name: "module_list",
                        type: "varchar",
                    },
                    {
                        name: "status",
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
        await queryRunner.dropTable('projects');
    }

}
