import { Evento } from './../interface/categoria.interface';
import { IsString, ArrayMinSize, IsArray, IsOptional } from 'class-validator';
export class AtualizarCategoriaDto {
  @IsString()
  @IsOptional()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: Array<Evento>;
}
