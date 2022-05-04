import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';

@Entity('users_roles')
class UserRole {

    @PrimaryColumn('uuid')
    role_id: string;

    @PrimaryColumn('uuid')
    user_id: string;

}

export default UserRole;