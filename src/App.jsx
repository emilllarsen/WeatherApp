import { BrowserRouter, Routes, Route } from "react-router";
import { Homepage } from "./pages/Homepage/Homepage";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
