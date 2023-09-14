import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailSenderDto } from './create-email-sender.dto';

export class UpdateEmailSenderDto extends PartialType(CreateEmailSenderDto) {}
