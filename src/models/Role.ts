import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Permission from "./Permission";

@Entity("roles")
class Role {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: "permissions_roles",
    joinColumns: [{ name: "role_id" }],
    inverseJoinColumns: [{ name: "permission_id" }],
  })
  permissions: Permission[];
}

export default Role;