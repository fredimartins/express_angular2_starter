import * as mongoose from 'mongoose';
import { IProduct } from './IProduct';

export interface IProduct2 extends IProduct, mongoose.Document {
}; 

export const ProductSchema = new mongoose.Schema({
  ProductId: String,
  Name: String,
  Category: String,
  Description: String,
  Price: Number,
});


export var repo = mongoose.model<IProduct2>('Products', ProductSchema);