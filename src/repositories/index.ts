import Role from "../models/Role";
import User from "../models/User";
import { getRepository } from "typeorm";
import Product from "../models/Product";
import Permission from "../models/Permission";

export const UserRepository = () => {
  return getRepository(User);
};

export const RoleRepository = () => {
  return getRepository(Role);
};

export const PermissionRepository = () => {
  return getRepository(Permission);
};

export const ProductRepository = () => {
  return getRepository(Product);
};