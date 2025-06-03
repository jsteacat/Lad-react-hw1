export interface IUser {
    id: number;
    name: string;
    age: number;
    email: string;
}

export interface IUsersProps {
    users: IUser[];
}
