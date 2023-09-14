import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { CreateEmailSenderDto } from './dto/create-email-sender.dto';
import { UpdateEmailSenderDto } from './dto/update-email-sender.dto';

@Controller('email-sender')
export class EmailSenderController {
  constructor(private readonly emailSenderService: EmailSenderService) {}

  @Post()
  create(@Body() createEmailSenderDto: CreateEmailSenderDto) {
    return this.emailSenderService.create(createEmailSenderDto);
  }

  @Get()
  findAll() {
    return this.emailSenderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailSenderService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmailSenderDto: UpdateEmailSenderDto,
  ) {
    return this.emailSenderService.update(+id, updateEmailSenderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailSenderService.remove(+id);
  }
}
