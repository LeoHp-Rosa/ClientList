import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactsRepository } from './repositories/contact.repository';
import { ContactPrismaRepository } from './repositories/prisma/contact.prisma.repository';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    PrismaService,
    {
      provide: ContactsRepository,
      useClass: ContactPrismaRepository,
    },
  ],
})
export class ContactsModule {}
