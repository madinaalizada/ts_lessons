import { Route, Routes } from "react-router-dom";
import Actors from "./components/Actors";
import BestFilms from "./components/BestFilms";
import ActorDetails from "./components/ActorDetails";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container font-medium text-gray-900 w-full min-h-screen px-2">
      <Header />
      <Routes>
        <Route path="/" element={<Actors />} />
        <Route path="/actor/:id" element={<ActorDetails />} />
        <Route path="/films" element={<BestFilms />} />
      </Routes>
    </div>
  );
};

export default App;