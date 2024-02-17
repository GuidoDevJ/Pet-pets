import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { ConfigModule } from '@nestjs/config';
import { MongoDbModule } from './common/db.module';

@Module({
  imports: [PetsModule, ConfigModule, MongoDbModule],
})
export class AppModule {}
