import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories";

export function can(permissionsRoutes: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { user } = request;

    const userOb = await UserRepository().findOne({
      where: { id: user.id },
      relations: ["permissions"],
    });

    if (!userOb) {
      return response.status(400).json("User does not exists");
    }

    const permissionExists = userOb.permissions
      .map((permission) => permission.name)
      .some((permission) => permissionsRoutes.includes(permission));

    if (!permissionExists) {
      return response.status(401).end();
    }

    return next();
  };
}

export function is(rolesRoutes: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { user } = request;

    const userOb = await UserRepository().findOne({
      where: { id: user.id },
      relations: ["roles"],
    });

    if (!userOb) {
      return response.status(400).json("User does not exists");
    }

    const roleExists = userOb.roles
      .map((role) => role.name)
      .some((role) => rolesRoutes.includes(role));

    if (!roleExists) {
      return response.status(401).end();
    }

    return next();
  };
}