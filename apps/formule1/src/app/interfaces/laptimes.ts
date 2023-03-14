import { IMRData } from "./api";
import { ICircuitItem } from './circuit';

export interface ILapTimesData extends IMRData {
  MRData: {
    RaceTable: {
      season?: string;
      driverId?: string;
      round?: string;
      Races: ILapTime[];
    };
  };
}

export interface ILapTime {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: ICircuitItem;
  date: string;
  time: string;
  Laps: ILap[];
}

export interface ILap {
  number: string;
  Timings: ILapTiming[];
}

export interface ILapTiming {
  driverId: string;
  position: string;
  time: string; // m:ss.mmm;
}
