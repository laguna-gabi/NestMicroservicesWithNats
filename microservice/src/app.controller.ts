import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, NatsContext, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('normalEvent')
  async normalEvent(@Payload() data, @Ctx() context: NatsContext) {
    console.log(data);
  }

  @EventPattern('longEvent')
  async longEvent(@Payload() data, @Ctx() context: NatsContext) {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log(data);
  }
}
