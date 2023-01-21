import { Role } from 'src/users/enums/role.enum';

export interface ActiveUserData {
  sub: number; // id
  email: string;
  refreshTokenId: string;
  role: Role;
}
