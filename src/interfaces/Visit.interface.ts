import { IRestaurant } from "./Restaurant.interface";
import { IUser } from "./User.interface";

export interface IVisit{
    id:string;
    visit_date:Date;
    status:VisitStatus;
    user:IUser;
    restaurant:IRestaurant;
    reason_rejected?:string;
    description:string;
    created_at:Date;
}

export type VisitStatus="Solicitado" | "Aprobado" | "Rechazado" | "Concluido"