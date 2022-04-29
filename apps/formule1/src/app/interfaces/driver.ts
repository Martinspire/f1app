import {IMRData} from "./api";

export interface IDriverData extends IMRData {
  MRData: {
    DriverTable: {
      Drivers: IDriver[];
    };
  };
}

export interface IDriver {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  permanentNumber?: string;
  code?: string;
}
