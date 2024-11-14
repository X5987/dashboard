export interface Geolocation {
  lat: number;
  long: number;
}

export interface Adress {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface User {
  adress: Adress;
  name: Name;
  id: number;
  email: string;
  username: string;
  password: string;
  phone: string;
  __v: number;
}

export type UserWithoutAdress = Omit<User, 'adress'> & Pick<User, 'name'>;

type Mixed = string | number | boolean;
export type StringOrNumber = Extract<Mixed, string | number>;
