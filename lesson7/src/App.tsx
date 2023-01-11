import { Route, Routes } from "react-router-dom";
import Table from "./components/Table/Table";
import Details from "./components/Details/Details";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <div className="w-full min-h-screen font-medium text-gray-900 container">
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Details/:country" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
