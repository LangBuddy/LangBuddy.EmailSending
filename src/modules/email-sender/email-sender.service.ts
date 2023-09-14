import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailBodyRequest } from './request/email-body.request';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailSenderService {
  constructor(
    private readonly mailService: MailerService,
    private readonly config: ConfigService,
  ) {}

  async sendEmail(emailBodyRequest: EmailBodyRequest) {
    const response = await this.mailService.sendMail({
      to: emailBodyRequest.to,
      from: this.config.get('MAIL_FROM'),
      subject: emailBodyRequest.subject,
      text: emailBodyRequest.text,
    });
    return response;
  }
}
