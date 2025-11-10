import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  // injecting services from other module
  // hello module must export helloService
  // user module must import HelloModule
  constructor(private readonly helloSerive: HelloService) {}
  getAllUsers() {
    return [
      {
        id: 1,
        name: 'Naveen',
      },
      {
        id: 2,
        name: 'Kumar',
      },
      {
        id: 3,
        name: 'Victor',
      },
    ];
  }

  getUserById(id: number) {
    const user = this.getAllUsers().find((user) => user.id === id);
    return user;
  }

  getWelcomeMessage(userId: number) {
    const user = this.getUserById(userId);

    if (!user) {
      return 'User not found';
    }

    return this.helloSerive.getHelloWithName(user?.name);
  }
}
