export class Products 
{
 id : string;
 name : string
 model : string;
 purchaseDate : Date;
 details : Array<{
     powers : string;
     size : string;
     color : string;
     form : string;
     weight : string;
 }>
 constructor() { }
}


