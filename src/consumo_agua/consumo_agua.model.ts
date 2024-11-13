import * as mongoose from 'mongoose';

export const consumo_aguaSchema = new mongoose.Schema({
    date: {type: String, required: true},
    volume: {type: String, required: true}
})

export interface Consumo extends mongoose.Document{
    date: string;
    volume: string;
}