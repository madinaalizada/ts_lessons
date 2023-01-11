import { useEffect, useState } from "react";
import TranslateBox from "./components/TranslateBox";
import { UseQueryResult, useQuery } from "react-query";
import useGetData from "./hooks/useGetData";
import Apis from "./services";
import { TranslationsType } from "./types";

const App = () => {
  const [leftLang, setLeftLang] = useState("en");
  const [rightLang, setRightLang] = useState("az");
  const [text, setText] = useState("");
  const [translate, setTranslate] = useState("");
  const { data } = useGetData({
    name: "translate",
    api: () =>
      Apis.postTranslate({ text: text, source: leftLang, target: rightLang }),
  }) as UseQueryResult<TranslationsType>;
  useEffect(() => {
    console.log(data);
  }, [text]);
  return (
    <div className="container font-medium text-gray-900 w-full min-h-screen px-2 flex justify-center items-center gap-16">
      <TranslateBox
        text={text}
        setText={setText}
        lang={leftLang}
        setLang={setLeftLang}
        placeholder=""
      />
      <button
        onClick={() => {
          setLeftLang(rightLang);
          setRightLang(leftLang);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      </button>
      <TranslateBox
        text={translate}
        setText={setTranslate}
        lang={rightLang}
        setLang={setRightLang}
        placeholder="Translation"
      />
    </div>
  );
};

export default App;
