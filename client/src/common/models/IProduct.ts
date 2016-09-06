export interface IProduct {
  ProductId: string;
  Name: string;
  Category:string;
  Description:string;
  Price:number;
};

export class Product implements IProduct {  
  ProductId: string;
  Name: string;
  Category:string;
  Description:string;
  Price:number;
};