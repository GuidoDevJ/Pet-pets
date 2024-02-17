import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { MongoDBID } from './custom';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post('create')
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get(':id')
  findOne(@Param('id', MongoDBID) id: string) {
    return this.petsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', MongoDBID) id: string,
    @Body() updatePetDto: UpdatePetDto,
  ) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoDBID) id: string) {
    return this.petsService.remove(id);
  }
}
