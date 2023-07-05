import Header from "./pages/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/eduexp" exact element={<Education />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
