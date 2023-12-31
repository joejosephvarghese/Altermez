import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserRouter from "./routes/UserRouter";
import AdminRouter from "./routes/AdminRouter";

function App() {
  return (
    <div className="font_roboto">
      <Router>
        <Routes>
          <Route path="/*" element={<UserRouter />}></Route>
          <Route path="/admin/*" element={<AdminRouter/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
