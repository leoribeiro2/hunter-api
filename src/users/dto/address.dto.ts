import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddressDto {
    @ApiModelProperty()
    @IsNotEmpty({ message: 'Street obrigatório' })
    street: string;
    number?: string;
    @ApiModelProperty()
    @IsNotEmpty({ message: 'City obrigatório' })
    city: string;
    @ApiModelProperty()
    @IsNotEmpty({ message: 'State obrigatório' })
    state: string;
    @ApiModelProperty()
    @IsNotEmpty({ message: 'PostalCode obrigatório' })
    postalCode: string;
}
