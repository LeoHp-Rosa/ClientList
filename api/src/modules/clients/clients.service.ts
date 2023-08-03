import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './repositories/clients.repository';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(private clientRepo: ClientsRepository) {}

  async create(data: CreateClientDto) {
    return await this.clientRepo.create(data);
  }

  findAll() {
    return this.clientRepo.findAll();
  }

  findOne(id: string) {
    const findUser = this.clientRepo.findOne(id);
    if (!findUser) {
      throw new NotFoundException('User not found!');
    }
    return findUser;
  }

  async findByEmail(email: string): Promise<Client | null> {
    const client = await this.clientRepo.findByEmail(email);

    return client;
  }

  update(id: string, data: UpdateClientDto) {
    const findUser = this.clientRepo.findOne(id);
    if (!findUser) {
      throw new NotFoundException('User not found!');
    }
    return this.clientRepo.update(id, data);
  }

  remove(id: string) {
    const findUser = this.clientRepo.findOne(id);
    if (!findUser) {
      throw new NotFoundException('User not found!');
    }
    return this.clientRepo.delete(id);
  }
}
