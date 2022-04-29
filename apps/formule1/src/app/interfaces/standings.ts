import { IConstructor } from './constructor';
import { IDriver } from './driver';
import {IMRData} from "./api";

export interface IDriverStandingsData extends IMRData {
  MRData: {
    StandingsTable: {
      StandingsLists: IDriverStandingsLists[];
    };
  };
}

export interface IDriverStandingsLists {
  season: string;
  round: string;
  DriverStandings: IDriverStandingItem[];
}

export interface IConstructorStandingsData extends IMRData {
  MRData: {
    StandingsTable: {
      StandingsLists: IConstructorStandingsLists[];
    };
  };
}

export interface IConstructorStandingsLists {
  season: string;
  round: string;
  ConstructorStandings: IConstructorStandingItem[];
}

export interface IDriverStandingItem {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: IDriver;
  Constructors: IConstructor[];
}

export interface IConstructorStandingItem {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: IConstructor;
}
