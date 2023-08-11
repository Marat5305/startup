import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: true }),
      { viewsDir: null },
      ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
