import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contact.repository';

@Injectable()
export class ContactsService {
  constructor(private contactRepo: ContactsRepository) {}
  async create(data: CreateContactDto, userId: string) {
    return await this.contactRepo.create(data, userId);
  }

  async findAll() {
    return await this.contactRepo.findAll();
  }

  findOne(id: string) {
    const findContact = this.contactRepo.findOne(id);
    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return findContact;
  }

  update(id: string, data: UpdateContactDto) {
    const findContact = this.contactRepo.findOne(id);
    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return this.contactRepo.update(id, data);
  }

  remove(id: string) {
    const findContact = this.contactRepo.findOne(id);
    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return this.contactRepo.delete(id);
  }
}
