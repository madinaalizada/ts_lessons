import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import useGetData from "../hooks/useGetData";
import Apis from "../services";
import { UseQueryResult } from "react-query";
import { LanguageType } from "../types";
type TranslateBoxType = {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
  placeholder: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

const TranslateBox = ({
  setLang,
  lang,
  placeholder,
  text,
  setText,
}: TranslateBoxType) => {
  const { data, isLoading, isError } = useGetData({
    name: "languages",
    api: Apis.getLanguages,
  }) as UseQueryResult<LanguageType>;

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="border px-4 py-2 rounded max-w-md w-full"
      >
        {data?.languages.map(({ language }, idx) => (
          <option key={idx} value={language}>
            {language}
          </option>
        ))}
      </select>
      <textarea
        className="bg-gray-100 max-w-lg h-56 w-full p-2 rounded"
        placeholder={placeholder}
        value={text}
        onChange={changeHandler}
      />
    </div>
  );
};

export default TranslateBox;
