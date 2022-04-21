import {IMRData} from "./api";

export interface IConstructorData extends IMRData {
  MRData: {
    ConstructorTable: {
      Constructors: IConstructor[];
    };
  };
}

export interface IConstructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
