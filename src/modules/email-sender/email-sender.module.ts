import { Module } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { EmailSenderController } from './email-sender.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [EmailSenderController],
  providers: [EmailSenderService],
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          secure: true,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class EmailSenderModule {}
