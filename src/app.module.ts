import { Module } from '@nestjs/common';
import { EmailSenderModule } from './modules/email-sender/email-sender.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EmailSenderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
