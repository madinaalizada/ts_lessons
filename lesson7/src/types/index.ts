export type StatisticsDataType = {
  get: string;
  parameters: [];
  errors: [];
  results: number;
  response: StatisticsDataResponseType[];
};

export type StatisticsDataResponseType = {
  continent: string;
  country: string;
  population: number;
  cases: {
    new: null;
    active: number;
    critical: null;
    recovered: number;
    "1M_pop": string;
    total: number;
  };
  deaths: {
    new: null;
    "1M_pop": string;
    total: number;
  };
  tests: {
    "1M_pop": string;
    total: number;
  };
  day: string;
  time: string;
};
