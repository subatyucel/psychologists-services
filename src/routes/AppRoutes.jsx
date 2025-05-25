import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import PsychologistPage from "../pages/PsychologistsPage";
import MainTemplate from "../components/templates/MainTemplate";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route index element={<MainPage />} />
        <Route path="/psychologists" element={<PsychologistPage />} />
        <Route path="/favorites" element={<MainPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
