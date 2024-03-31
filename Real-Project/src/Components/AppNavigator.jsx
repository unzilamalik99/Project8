import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Interviews from "./Interviews";
import Feature from "./Feature";
import StudentWins from "./StudentWins";
import TRWCampuses from "./TRWCampuses";
import FAQ from "./FAQ";

const AppNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Interviews" element={<Interviews />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/StudentWins" element={<StudentWins />} />
        <Route path="/TRWCampuses" element={<TRWCampuses />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigator;
