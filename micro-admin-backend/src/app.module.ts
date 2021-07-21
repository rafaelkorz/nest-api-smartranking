import { AppService } from './app.service';
import { AppController } from './app.controller';
import { JogadorSchema } from './interfaces/jogadores/jogador.schema';
import { CategoriaSchema } from './interfaces/categorias/categoria.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rafaelkorz:wAMz2qIGRUzX40BG@cluster0.2emxk.mongodb.net/sradmranking?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }),
      MongooseModule.forFeature([
        { name: 'Categoria', schema: CategoriaSchema },
        { name: 'Jogador', schema: JogadorSchema },
      ]),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {}
