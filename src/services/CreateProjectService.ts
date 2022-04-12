import { getRepository } from 'typeorm';

import Project from '../models/Project';

interface Request{
    user_id: string;
    type: string;
    state: string;
    distributor: string;
    fantasy_name: string;
    cpf_cnpj: string;
    rg: string;
    number_uc: string;
    telephone: string;
    email: string;
    invoice: string;
    credit_clearing: string;
    invoice_credit_clearing: string;
    latitude: string;
    longitude: string;
    cep: string;
    city: string;
    state_address: string;
    street: string;
    neighborhood: string;
    complement: string;
    number: string;
    transformer: string;
    power_transformer: string;
    class: string;
    ramal: string;
    connection: string;
    cable: string;
    category: string;
    disjuntor: string;
    tension: string;
    post: string;
    instalation: string;
    stringbox: string;
    module_manufacturer: string;
    module_model: string;
    module_qtd: string;
    module_obs: string;
    module_list: string;
    status: string;
}

class CreateProjectService {

    public async execute({ 
        user_id,
        type,
        state,
        distributor,
        fantasy_name,
        cpf_cnpj,
        rg,
        number_uc,
        telephone,
        email,
        invoice,
        credit_clearing,
        invoice_credit_clearing,
        latitude,
        longitude,
        cep,
        city,
        state_address,
        street,
        neighborhood,
        complement,
        number,
        transformer,
        power_transformer,
        class1,
        ramal,
        connection,
        cable,
        category,
        disjuntor,
        tension,
        post,
        instalation,
        stringbox,
        module_manufacturer,
        module_model,
        module_qtd,
        module_obs,
        module_list,
        status,
    }: Request): Promise<Project>{
       
        const projectsRepository = getRepository(Project);

        const project = projectsRepository.create({
            user_id,
            type,
            state,
            distributor,
            fantasy_name,
            cpf_cnpj,
            rg,
            number_uc,
            telephone,
            email,
            invoice,
            credit_clearing,
            invoice_credit_clearing,
            latitude,
            longitude,
            cep,
            city,
            state_address,
            street,
            neighborhood,
            complement,
            number,
            transformer,
            power_transformer,
            class1,
            ramal,
            connection,
            cable,
            category,
            disjuntor,
            tension,
            post,
            instalation,
            stringbox,
            module_manufacturer,
            module_model,
            module_qtd,
            module_obs,
            module_list,
            status,
        });

        await projectsRepository.save(project);

        return project;
    }

}

export default CreateProjectService;