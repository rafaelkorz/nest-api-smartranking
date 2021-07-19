import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interface/categoria.interface';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body() criarCagoriaDto: CriarCategoriaDto,
  ): Promise<Categoria> {
    return await this.categoriasService.criarCategoria(criarCagoriaDto);
  }

  @Get()
  async consultarCategorias(): Promise<Array<Categoria>> {
    return await this.categoriasService.consultarTodasCategorias();
  }

  @Get('/:categoria')
  async consultarCategroiaPeloId(
    @Param('categoria') categoria: string): Promise<Categoria> {
    return await this.categoriasService.consultarTodasCategoriaPeloId(
      categoria,
    );
  }

  @Put('/:categoria')
  @UsePipes(ValidationPipe)
  async atualizarCategoria(
    @Body() atualizarCategoriaDto: AtualizarCategoriaDto,
    @Param('categoria') categoria: string,
  ): Promise<void> {
    await this.categoriasService.atualizarCategoria(categoria,atualizarCategoriaDto,
    );
  }

  @Post('/:categoria/jogadores/:idJogador')
  async atribuirCategoriaJogador(
      @Param() params: string[]): Promise<void> {
       return await this.categoriasService.atribuirCategoriaJogador(params)  
  }
}
