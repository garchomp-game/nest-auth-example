import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('dummySignUp')
    dummySignUp() {
        this.usersService.dummySignUp();
    }

    @Get('findAll')
    async findAll(): Promise<Users[]> {
        return await this.usersService.findAll();
    }
}
