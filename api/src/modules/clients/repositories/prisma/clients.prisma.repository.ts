import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientsRepository } from '../clients.repository';

@Injectable()
export class ClientsPrismaRepository implements ClientsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClientDto): Promise<Client> {
    const client = new Client();
    Object.assign(client, {
      ...data,
    });
    const newClient = await this.prisma.client.create({
      data: { ...client },
    });

    return plainToInstance(Client, newClient);
  }
  async findAll(): Promise<Client[]> {
    const clients: Client[] = await this.prisma.client.findMany();
    return plainToInstance(Client, clients);
  }
  async findOne(id: string): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: { id },
      include: {
        contacts: true,
      },
    });
    return plainToInstance(Client, client);
  }
  async update(id: string, data: UpdateClientDto): Promise<Client> {
    const client = await this.prisma.client.update({
      where: { id },
      data: { ...data },
    });
    return plainToInstance(Client, client);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.client.delete({
      where: { id },
    });
  }
  async findByEmail(email: string): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: { email },
    });
    return client;
  }
}
