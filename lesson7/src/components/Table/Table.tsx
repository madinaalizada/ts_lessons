import useGetData from "../../hooks/useGetData";
import { Statistics } from "../../utils/Statistics";
import { StatisticsDataResponseType } from "../../types";
import Flag from "react-country-flag";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Table = () => {
  const statistics = new Statistics();
  const { data, isError, isLoading } = useGetData({
    name: "statistics",
    api: statistics.getData,
  });
  const [val, setVal] = useState("");
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const [currentPage, setCurrentPage] = useState(0);
  const count = data?.response.length && Math.round(data?.response.length / 15);
  const arr = Array(count).fill(1);
  let response = data?.response.slice(currentPage * 16, 16 * (currentPage + 1));
  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div className="pt-2">
      <div className="w-full mx-auto flex justify-center py-4">
        <input
          type="text"
          className="border-2 rounded flex focus:outline-none px-2 py-1 focus:border-blue-400"
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <div className="w-full border rounded-md">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="p-2">Country Name</th>
              <th className="p-2">Population</th>
              <th className="p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {response
              ?.filter(({ country }: StatisticsDataResponseType) =>
                country.toLowerCase().startsWith(val.toLowerCase())
              )
              .map(
                ({
                  country,
                  population,
                  cases,
                  tests,
                  deaths,
                }: StatisticsDataResponseType) => (
                  <tr className="odd:bg-gray-200" key={country}>
                    <td className="text-lg p-2">{country}</td>
                    <td className=" p-2">{population || "no info"}</td>
                    <td className="flex justify-center  p-2">
                      <Link
                        to={`/Details/${country}`}
                        state={{ cases, tests, deaths }}
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
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
      <div className="w-full justify-center flex py-2">
        <div className="flex border px-2 py-1 gap-1 rounded">
          {arr.map((item, idx) => (
            <button
              onClick={(e) =>
                e.currentTarget.getAttribute("data-index") !== null &&
                setCurrentPage(
                  Number(e.currentTarget.getAttribute("data-index")) as number
                )
              }
              data-index={idx}
              className={`${
                currentPage === idx && "bg-sky-400 text-white"
              } px-3 py-1 hover:bg-sky-400 hover:text-white cursor-pointer rounded-sm`}
              key={idx}
            >
              {idx + 1}
            </button>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Table;
