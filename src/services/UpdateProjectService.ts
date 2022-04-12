import { getRepository } from 'typeorm';

import Project from '../models/Project';

interface Request{
    id: string;
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

class UpdateProjectService {

    public async execute({ 
        id,
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

        const project = await projectsRepository.findOne(id);

        project.type = type;
        project.state = state;
        project.distributor = distributor;
        project.fantasy_name = fantasy_name;
        project.cpf_cnpj = cpf_cnpj;
        project.rg = rg;
        project.number_uc = number_uc;
        project.telephone = telephone
        project.email = email;
        project.invoice = invoice;
        project.credit_clearing = credit_clearing;
        project.invoice_credit_clearing = invoice_credit_clearing;
        project.latitude = latitude;
        project.longitude = longitude;
        project.cep = cep;
        project.city = city;  
        project.state_address = state_address; 
        project.street = street;
        project.neighborhood = neighborhood;
        project.complement = complement;
        project.number = number;
        project.transformer = transformer;
        project.power_transformer = power_transformer;
        project.class1 = class1;
        project.ramal = ramal;
        project.connection = connection;
        project.cable = cable;
        project.category = category;
        project.disjuntor = disjuntor;
        project.tension = tension;
        project.post = post;
        project.instalation = instalation;
        project.stringbox = stringbox;
        project.module_manufacturer = module_manufacturer;
        project.module_model = module_model;
        project.module_qtd = module_qtd;
        project.module_obs = module_obs;
        project.module_list = module_list;
        project.status = status;

        await projectsRepository.save(project);

        return project;
    }

}

export default UpdateProjectService;