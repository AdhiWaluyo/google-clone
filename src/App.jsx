import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            {/* SearchPage (Results) */}
            <Route path="/search" element={<SearchPage />} />

            {/* Home (Search) */}
            <Route path="/app" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
