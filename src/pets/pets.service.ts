import { HttpException, Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './entities/pet.entity';
import { Model } from 'mongoose';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel(Pet.name)
    private readonly petModel: Model<Pet>,
  ) {}
  async create(createPetDto: CreatePetDto) {
    try {
      const userRes = await this.petModel.create(createPetDto);
      return userRes;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }

  async findOne(id: string) {
    try {
      return await this.petModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    try {
      const userUpdate = await this.petModel.findByIdAndUpdate(
        id,
        updatePetDto,
      );
      if (userUpdate) return { msg: 'Pet update' };
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }

  async remove(id: string) {
    try {
      const removeUser = await this.petModel.findByIdAndDelete(id);
      if (removeUser) return { msg: 'Pet deleted' };
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
