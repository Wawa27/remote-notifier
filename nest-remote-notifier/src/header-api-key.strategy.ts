import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import Strategy from 'passport-headerapikey';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HeaderApiKeyStrategy extends PassportStrategy(
  Strategy,
  'header-api-key',
) {
  constructor(private readonly configService: ConfigService) {
    super({ header: 'API-KEY', prefix: '' }, true, async (apiKey, done) => {
      return this.validate(apiKey, done);
    });
  }

  public validate = (
    apiKey: string,
    done: (error: Error, data: any) => void,
  ) => {
    if (this.configService.get<string>('API_KEYS').includes(apiKey)) {
      done(null, true);
    }
    done(new UnauthorizedException(), null);
  };
}
