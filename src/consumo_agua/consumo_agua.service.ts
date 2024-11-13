import { Injectable } from '@nestjs/common';
import { Consumo } from './consumo_agua.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class ConsumoAguaService {
    constructor( @InjectModel('Consumo') private readonly consumoModel: Model<Consumo>){}

    async createEntry( consumo: Consumo){
        const consumoModel = new this.consumoModel(
            {
                date: consumo.date,
                volume : consumo.volume
            }
        );
        const result = await consumoModel.save();
        return result.id as string;
    }

    async getHistory(){
        const entries = await this.consumoModel.find().exec();
        return entries;
    }
}
