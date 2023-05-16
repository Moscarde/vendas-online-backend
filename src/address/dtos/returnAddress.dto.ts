import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  numberAdress: number;
  cep: string;
  cityId: number;
  //   city?: any;

  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.numberAdress = address.numberAddress;
    this.cep = address.cep;
  }
}
