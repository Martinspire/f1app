import { IDateTime, IMRData } from "./api";
import { ICircuitItem } from "./circuit";

export interface ISeasonsData extends IMRData {
  MRData: {
    SeasonTable: {
      Seasons: ISeasonsItem[];
    };
  };
}

export interface ISeasonsItem {
  season: string;
  url: string;
}

export interface ISeasonData extends IMRData {
  MRData: {
    RaceTable: ISeasonRaceTable;
  }
}

export interface ISeasonRaceTable {
  season: string;
  Races: ISeasonRaceItem[];
}

export interface ISeasonRaceItem {
  [key: string]: any;
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: ICircuitItem;
  date: string; // yyyy-mm-dd
  time: string; // hh:mm:ssZ
  FirstPractice?: IDateTime;
  SecondPractice?: IDateTime;
  ThirdPractice?: IDateTime;
  Qualifying?: IDateTime;
  Sprint?: IDateTime;
}
