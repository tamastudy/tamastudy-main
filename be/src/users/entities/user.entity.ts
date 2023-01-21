import {
  Permission,
  PermissionType,
} from 'src/iam/authorization/permission.type';
import { ApiKey } from 'src/users/api-keys/entities/api-key.entity/api-key.entity';
import { Role } from 'src/users/enums/role.enum';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true }) // 👈
  password: string;

  @Column({ nullable: true })
  googleId: string;

  @Column({ enum: Role, default: Role.Regular })
  role: Role;

  @Column({ enum: Permission, default: [], type: 'json' })
  permissions: PermissionType[];

  @JoinTable() // 👈
  @OneToMany((type) => ApiKey, (apiKey) => apiKey.user)
  apiKeys: ApiKey[];
}
