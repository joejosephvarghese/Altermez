import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserRouter from "./routes/UserRouter";

function App() {
  return (
    <div className="font_roboto">
      <Router>
        <Routes>
          <Route path="/*" element={<UserRouter />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
