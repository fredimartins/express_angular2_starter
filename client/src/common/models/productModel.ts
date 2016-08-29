import * as mongoose from 'mongoose';

export interface IProduct extends mongoose.Document {
  ProductId: string;
  Name: string;
  Category:string;
  Description:string;
  Price:number;
};

export const ProductSchema = new mongoose.Schema({
  ProductId: String,
  Name: String,
  Category: String,
  Description: String,
  Price: Number,
});


export var repo = mongoose.model<IProduct>('Products', ProductSchema);