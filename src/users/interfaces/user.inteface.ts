import { Address } from './address.interface';

export interface User {
    email: string;
    cnpj: string;
    address: Address;
    password: string;

    validatePass(pass: string): boolean;
    save(): User;
}
