import { IDateTime, IMRData, ITime } from './api';
import { ICircuitItem } from './circuit';
import { IConstructor } from './constructor';
import { IDriver } from './driver';

export interface IRaceData extends IMRData {
  MRData: {
    RaceTable: {
      driverId?: string;
      season?: string;
      round?: string
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
  time: string; // hh:mm:ssZ
  Results: IRaceResult[];
}

export interface IRaceResult {
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

export interface IFastestLap {
  rank: string;
  lap: string;
  Time: {
    time: string; // m:s.mmm
  },
  AverageSpeed: {
    units: string; //"kph"
    speed: string; // may need to be rounded, 3 decimals
  }
}

export interface IPlannedRaceData extends IMRData {
  MRData: {
    RaceTable: {
      driverId?: string;
      season?: string;
      round?: string
      Races: IPlannedRaceItem[];
    };
  };
}

export interface IPlannedRaceItem {
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
