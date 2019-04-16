import { IsNotEmpty, ValidateNested, registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { AddressDto } from './address.dto';

export class SignUpDto {

    @ApiModelProperty()
    @IsNotEmpty({ message: 'Email obrigatório' })
    email: string;
    @ApiModelProperty()
    @IsNotEmpty({ message: 'Cnpj obrigatório' })
    cnpj: string;
    @ApiModelProperty({ type: AddressDto })
    @Type(() => AddressDto)
    address: AddressDto;
    @ApiModelProperty()
    @IsNotEmpty({ message: 'Password obrigatório' })
    password: string;
}

export function IsNonPrimitiveArray(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsNonPrimitiveArray',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return Array.isArray(value) && value.reduce((a, b) => a && typeof b === 'object' && !Array.isArray(b), true);
        },
      },
    });
  };
}
