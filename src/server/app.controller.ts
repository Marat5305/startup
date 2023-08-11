import { Controller, Get } from '@nestjs/common';
import { Render, Req, Res } from '@nestjs/common/decorators';
import { Response, Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  home() {
    return {};
  }
}
