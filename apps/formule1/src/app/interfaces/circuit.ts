import { ILocationData, IMRData } from "./api";

export interface ICircuitData extends IMRData{
  CircuitTable: {
    Circuits: ICircuitItem[];
  }
}

export interface ICircuitItem {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: ILocationData;
}
