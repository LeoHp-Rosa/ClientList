import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  registDate?: Date;

  constructor() {
    this.id = randomUUID();
  }
}
