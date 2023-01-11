import axios from "axios";
import { LanguageType, TranslationsType } from "../types";

const instance = axios.create({
  baseURL: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "X-RapidAPI-Key": "92aebb0be2mshc788f57343e36eap1147e3jsn1c26b6385166",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
});

const Apis = {
  getLanguages: async (): Promise<LanguageType> => {
    const { data } = await instance.get("/languages");
    return data.data;
  },
  postTranslate: async ({
    text,
    target,
    source,
  }: {
    text: string;
    target: string;
    source: string;
  }): Promise<TranslationsType> => {
    const data = await instance.post("", "", {
      params: { target: target, source: source, q: text },
    });
    console.log(target);
    return data.data;
  },
};

export default Apis;
