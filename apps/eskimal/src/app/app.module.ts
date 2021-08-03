import { Module } from '@nestjs/common';
import { SetupModule } from '../setup/setup.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SetupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
