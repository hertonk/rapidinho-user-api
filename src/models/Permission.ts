import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("permissions")
class Permission{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;
}

export default Permission;