import axios from "axios";
import { StatisticsDataType } from "../types";

const instance = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "92aebb0be2mshc788f57343e36eap1147e3jsn1c26b6385166",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
});

export class Statistics<T> {
  getData = async (): Promise<StatisticsDataType> => {
    const { data } = await instance.get("/statistics");
    return data;
  };
}
