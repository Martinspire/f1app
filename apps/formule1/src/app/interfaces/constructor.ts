import { IMRData } from "./api";

export interface IConstructorData extends IMRData{
  ConstructorTable: {
    Constructors: IConstructor[];
  }
}

export interface IConstructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
