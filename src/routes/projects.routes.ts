import { Router } from "express";
import { getRepository } from 'typeorm';
import Project from "../models/Project";

import UpdateProjectService from "../services/UpdateProjectService";
import CreateProjectService from "../services/CreateProjectService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const projectsRouter = Router();

projectsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const pricesRepository = getRepository(Project);

    const prices = await pricesRepository.find();

    return response.json(prices);

});

projectsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const projectsRepository = getRepository(Project);

    const project = await projectsRepository.findOne(id);

    return response.json(project);

});

projectsRouter.get('/status/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const projectsRepository = getRepository(Project);

    const project = await projectsRepository.findOne(id);

    return response.json(project?.status);

});

projectsRouter.get('/user/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const projectsRepository = getRepository(Project);

    const projects = await projectsRepository.find({
        where: { user_id : id }
    });

    return response.json(projects);

});

projectsRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
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
         } = request.body;

        const createProject = new CreateProjectService();

        const project = await createProject.execute({ 
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

        return response.json(project);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

projectsRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
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
         } = request.body;

        const updateProject = new UpdateProjectService();

        const project = await updateProject.execute({ 
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

        return response.json(project);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});


projectsRouter.delete('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const pricesRepository = getRepository(Project);

    const price = await pricesRepository.delete(id);

    return response.json();

});

export default projectsRouter;