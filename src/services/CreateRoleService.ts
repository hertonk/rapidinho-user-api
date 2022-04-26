import Role from "../models/Role";
import { RoleRepository } from "../repositories";

type RoleRequest = {
  name: string;
  description: string;
};

export class CreateRoleService {
  async execute({ name, description }: RoleRequest): Promise<Role | Error> {
    const repo = RoleRepository();

    if (await repo.findOne({ name })) {
      return new Error("Role already exists");
    }

    const role = await repo.create({ name, description });

    await repo.save(role);

    return role;
  }
}