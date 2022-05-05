import { IConstructor } from './constructor';
import { IDriver } from './driver';
import { ICircuitItem } from './circuit';
import {IMRData} from "./api";

export interface IRaceData extends IMRData {
  MRData: {
    RaceTable: {
      driverId: string;
      Races: IRaceItem[];
    };
  };
}

export interface IRaceItem {
  raceId: string; // number as string
  round: string; // number as string
  url: string; // wiki link
  raceName: string;
  Circuit: ICircuitItem;
  date: string; // yyyy-mm-dd as string
  Results: IRaceResult[];
}

export interface IRaceResult {
  number: string; // number as string
  position: string; // number as string
  positionText: string;
  points: string; // number as string
  Driver: IDriver;
  Constructor: IConstructor;
  grid: string; // number as string
  laps: string; // number as string
  status: string; // e.g. +2 laps
}
