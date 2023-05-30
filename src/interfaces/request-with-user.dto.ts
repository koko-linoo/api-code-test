import type { Request } from 'express';
import { UserEntity } from 'src/users/entities/user.entity';

export class RequestWithUser extends Request {
    user: Partial<UserEntity>;
}