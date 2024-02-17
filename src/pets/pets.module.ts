import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './entities/pet.entity';
import { ConfigModule } from 'src/common/config.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pet.name,
        schema: PetSchema,
      },
    ]),
    ConfigModule,
  ],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
