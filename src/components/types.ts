// WORKING WITH RESUABLE PROPS

export type Info = {
    id:number;
    name:string;
    email:string;
}

export type AdminList = Info & {
    role:string;
    lastLogin: new Date();

}