export type User = {
    UserID: number;
    Fullname: string;
    Email: string;
    Password:string  
    Gender: string
    Age: number
    PhoneNumber: string
    ProfilePicture: string
    role: string
}

export enum Gender {Male, Female};
export enum Role {admin, commuter, driver}