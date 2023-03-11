import { IMRData, ITime } from './api';
import { ICircuitItem } from './circuit';
import { IConstructor } from './constructor';
import { IDriver } from './driver';
import { IFastestLap } from './race';

export interface ISprintRaceData extends IMRData {
  MRData: {
    RaceTable: {
      driverId?: string;
      season?: string;
      round?: string
      Races: ISprintRaceItem[];
    };
  };
}

export interface ISprintRaceItem {
  raceId: string; // number as string
  round: string; // number as string
  url: string; // wiki link
  raceName: string;
  Circuit: ICircuitItem;
  date: string; // yyyy-mm-dd as string
  time: string; // hh:mm:ssZ
  SprintResults: ISprintRaceResult[];
}

export interface ISprintRaceResult {
  number: string; // number as string
  position: string; // number as string
  positionText: string;
  points: string; // number as string
  Driver: IDriver;
  Constructor: IConstructor;
  grid: string; // number as string might be different due to penalties from quali result
  laps: string; // number as string
  status: string; // e.g. +2 laps
  Time: ITime;
  FastestLap: IFastestLap;
}
