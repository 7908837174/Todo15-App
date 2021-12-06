import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Notfound from "./routes/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
