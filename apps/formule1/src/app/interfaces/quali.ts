import { IMRData } from './api';
import { ICircuitItem } from './circuit';
import { IConstructor } from './constructor';
import { IDriver } from './driver';

export interface IRaceData extends IMRData {
  MRData: {
    RaceTable: {
      driverId?: string;
      season?: string;
      round?: string;
      Races: IQualiItem[];
    };
  };
}

export interface IQualiItem {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: ICircuitItem;
  date: string; // yyyy-mm-dd as string
  time: string; // hh:mm:ssZ
  QualifyingResults: IQualiResult[];
}

export interface IQualiResult {
  number: string;
  position: string;
  Driver: IDriver;
  Constructor: IConstructor;
  Q1: string; // time
  Q2: string;
  Q3: string;
}