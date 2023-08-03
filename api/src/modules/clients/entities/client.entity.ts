import { Prisma } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class Client implements Prisma.ClientCreateInput {
  readonly id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  registDate?: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
