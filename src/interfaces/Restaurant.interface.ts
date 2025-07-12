import { ILocation } from "./Location.interface";
import { ITypeCooking } from "./TypeCooking";

export interface IRestaurant{
    id:string;
    name:string;
    country:string;
    address:string;
    stars:5;
    image:string;
    num_reviews:number;
    location:ILocation;
    type:ITypeCooking;
    
}