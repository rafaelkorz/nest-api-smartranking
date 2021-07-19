import { CategoriaSchema } from './interface/categoria.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { JogadoresModule } from 'src/jogadores/jogadores.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Categoria', schema: CategoriaSchema}]),
            JogadoresModule],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
