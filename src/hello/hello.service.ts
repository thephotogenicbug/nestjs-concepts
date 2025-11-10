import { Injectable } from '@nestjs/common';

// handles business logic

@Injectable()
export class HelloService {

    // method
    getHello():string{
        return 'Hello Nest JS!'
    }

    getHelloWithName(name:string):string{
        return `Hello ${name}!`;
    }
}
