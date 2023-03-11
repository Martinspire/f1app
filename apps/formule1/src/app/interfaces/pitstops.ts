import { IMRData } from "./api";
import { ICircuitItem } from './circuit';

export interface IPitstopsData extends IMRData {
  MRData: {
    RaceTable: {
      season?: string;
      driverId?: string;
      round?: string;
      Races: IPitstops[];
    };
  };
}

export interface IPitstops {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: ICircuitItem;
  date: string;
  time: string;
  PitStops: IPitstop[];
}

export interface IPitstop {
  driverId: string;
  stop: string;
  lap: string;
  time: string;
  duration: string; // ss.mmm
}