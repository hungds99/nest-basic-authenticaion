import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    const message = this.appService.getHello();
    return res.status(HttpStatus.OK).json({ message: message });
  }

  @Get('admin')
  getAdmin(@Res() res: Response) {
    const message = this.appService.getAdmin();
    return res.status(HttpStatus.OK).json({ message: message });
  }

  @Get('user')
  getUser(@Res() res: Response) {
    const message = this.appService.getUser();
    return res.status(HttpStatus.OK).json({ message: message });
  }
}
