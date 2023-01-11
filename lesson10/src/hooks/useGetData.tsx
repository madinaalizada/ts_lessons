import { UseQueryResult, useQuery } from "react-query";
import { LanguageType, TranslationsType } from "../types";

interface IUseGetData<T> {
  name: string;
  api: () => Promise<T>;
}

type ReturnType<T> = UseQueryResult<T>;

type DataType = LanguageType | TranslationsType;

const useGetData = ({
  name,
  api,
}: IUseGetData<DataType>): ReturnType<DataType> => {
  const result = useQuery(name, api);
  return result;
};

export default useGetData;
