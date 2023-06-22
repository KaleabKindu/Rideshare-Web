export type User = {
    UserID: number;
    Fullname: string;
    Email: string;
    Password:string  
    Gender: Gender
    Age: number
    PhoneNumber: string
    ProfilePicture: string
    role: Role
}

export enum Gender {Male, Female};
export enum Role {admin, commuter, driver}