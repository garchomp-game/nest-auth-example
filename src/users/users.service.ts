import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async dummySignUp(): Promise<any> {
    const removeUsers = await this.userRepository.find();
    await this.userRepository.remove(removeUsers);

    const user = new Users();
    user.userId = 1;
    user.username = 'john';
    user.password = 'changeme';
    await this.userRepository.save(user);

    const user2 = new Users();
    user2.userId = 2;
    user2.username = 'chris';
    user2.password = 'secret';
    await this.userRepository.save(user2);

    const user3 = new Users();
    user3.userId = 3;
    user3.username = 'maria';
    user3.password = 'guess';
    await this.userRepository.save(user3);
  }

  async findOne(username: string): Promise<Users | undefined> {
    return this.userRepository.findOne({username})
  }

  async findAll(): Promise<Users[]> {
    return await this.userRepository.find();
  }
}
