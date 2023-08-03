import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { compare } from 'bcryptjs';
import { ClientsService } from '../clients/clients.service';

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async validateClient(email: string, password: string) {
    const client = await this.clientService.findByEmail(email);
    if (client) {
      const passwordMatch = await compare(password, client.password);
      if (passwordMatch) {
        return { email: client.email };
      }
    }
    return null;
  }

  async login(email: string) {
    const client = await this.clientService.findByEmail(email);
    return {
      token: this.jwtService.sign({ email }, { subject: client.id }),
    };
  }
}
