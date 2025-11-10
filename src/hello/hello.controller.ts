import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

// express ->
// server.js -> routes, controller, services
// route A -> controller A -> service A

// responsible for incoming requests and returns response
// get, post, put, delete,

// localhost:3000/hello

@Controller('hello')
export class HelloController {
  // dependency injection

  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }

  // params

  @Get('user/:name')
  getHelloWithName(@Param('name') name: string): string {
    return this.helloService.getHelloWithName(name);
  }

  // /hello/query?name=naveen

  @Get('query')
  getHelloWithQuery(@Query('name') name :string):string{
    return this.helloService.getHelloWithName(name || 'world')
  }
  
}
