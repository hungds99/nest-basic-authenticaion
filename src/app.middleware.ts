import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.info('Request...', req.url);

    const auth = { login: 'admin', password: 'secret' }; // Change this

    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64')
      .toString()
      .split(':');

    if (
      login &&
      password &&
      login === auth.login &&
      password === auth.password
    ) {
      return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="401"');
    return res.status(401).send('Authentication required.');
  }
}
