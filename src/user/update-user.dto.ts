import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// DTO -> data transfer object
export class UpdateUserDto extends PartialType(CreateUserDto) {}
