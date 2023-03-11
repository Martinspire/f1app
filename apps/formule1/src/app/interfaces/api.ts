export interface IMRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
}

export interface IDateTime {
  date: string; // yyyy-mm-dd
  time: string; // hh:mm:ssZ
}

export interface ILocationData {
  lat: string; // xx.xxxx
  long: string; // yy.yyyy
  locality: string;
  country: string;
}

export interface ITime {
  millis: string; // millis since start of day
  time: string; // hh:mm:ss.mmm
}