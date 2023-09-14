import { Body, Controller, Post } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { EmailBodyRequest } from './request/email-body.request';

@Controller('email-sender')
export class EmailSenderController {
  constructor(private readonly mailService: EmailSenderService) {}

  @Post()
  async sendEmail(@Body() emailBodyRequest: EmailBodyRequest) {
    return this.mailService.sendEmail(emailBodyRequest);
  }
}
