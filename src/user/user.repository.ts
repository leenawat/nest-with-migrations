import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  find(): Promise<any[]> {
    return this.query('select * from user');
  }
}
