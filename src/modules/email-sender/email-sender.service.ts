import { Injectable } from '@nestjs/common';
import { CreateEmailSenderDto } from './dto/create-email-sender.dto';
import { UpdateEmailSenderDto } from './dto/update-email-sender.dto';

@Injectable()
export class EmailSenderService {
  create(createEmailSenderDto: CreateEmailSenderDto) {
    return 'This action adds a new emailSender';
  }

  findAll() {
    return `This action returns all emailSender`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailSender`;
  }

  update(id: number, updateEmailSenderDto: UpdateEmailSenderDto) {
    return `This action updates a #${id} emailSender`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailSender`;
  }
}
