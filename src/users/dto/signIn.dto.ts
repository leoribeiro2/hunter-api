import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class SignInDto {
    @ApiModelProperty()
    @IsNotEmpty({ message: 'Email obrigatório' })
    readonly email: string;
    @ApiModelProperty()
    @IsNotEmpty({ message: 'Password obrigatório' })
    readonly password: string;
}
