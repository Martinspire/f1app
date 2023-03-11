import { IMRData } from "./api";

export interface IFinishingStatusData extends IMRData {
  MRData: {
    StatusTable: {
      season?: string;
      driverId?: string;
      Status: IFinishingStatus[];
    };
  };
}

export interface IFinishingStatus {
  statusId: string; // id of status
  count: string; // amount of this same status for driver or team in a season or race
  status: string; // description
}
