import { Link, useLocation } from "react-router-dom";

interface IState {
  state: {
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
  };
}

const Details = () => {
  const { state } = useLocation() as unknown as IState;
  const { cases, deaths, tests } = state;
  return (
    <div className="relative">
      <div className="absolute top-5 left-4">
        <Link to="/" className=" flex justify-center items-center gap-2">
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
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>Back List</p>
        </Link>
      </div>
      <div className="w-full p-4 gap-4 grid grid-cols-3 pt-16">
        <div className="border p-2 rounded-lg bg-slate-50">
          <p className="text-xl font-bold">Tests</p>
          <p>Total : {tests.total || "no info"}</p>
        </div>
        <div className="border p-2 rounded-lg bg-slate-50">
          <p className="text-xl font-bold">Cases</p>
          <p>Active : {cases.active || "no info"}</p>
          <p>Recovered : {cases.recovered || "no info"}</p>
          <p>Total : {cases.total || "no info"}</p>
        </div>
        <div className="border p-2 rounded-lg bg-slate-50">
          <p className="text-xl font-bold">Deaths</p>
          <p>Total : {deaths.total || "no info"}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
