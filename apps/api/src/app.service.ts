import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): object {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'Reverb API is healthy',
      service: 'reverb-api',
      version: '1.0.0'
    };
  }
}
