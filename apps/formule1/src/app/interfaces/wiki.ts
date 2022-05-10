export interface IWikiQuery {
  batchomplete: string;
  query: {
    normalized: IWikiNormalized[];
    pages: {
      [id: string]: IWikiResult;
    };
  };
}

export interface IWikiNormalized {
  from: string;
  to: string;
}

export interface IWikiResult {
  pageid: number;
  ns: number;
  title: string;
  thumbnail?: IWikiThumb;
  pageImage?: string;
  extract?: string;
}

export interface IWikiThumb {
  source: string;
  width: number;
  height: number;
}
