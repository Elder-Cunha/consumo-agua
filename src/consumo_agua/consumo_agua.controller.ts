import { Controller, Get, Body, Post } from '@nestjs/common';
import { Consumo } from './consumo_agua.model';
import { ConsumoAguaService } from './consumo_agua.service';

@Controller('consumo-agua')
export class ConsumoAguaController {
    constructor(private readonly consumoAguaService:ConsumoAguaService) {}

    @Get()
    retrieveHistory(): Promise<any>{
        return this.consumoAguaService.getHistory();
    }

    @Post()
    async createEntry(@Body() consumo:Consumo): Promise<any>{
        var response = await this.consumoAguaService.createEntry(consumo);
        return {id: response};
    }
}
