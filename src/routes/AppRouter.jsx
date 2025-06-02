import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import App from "../App"; //

const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Root loads your App (MedicalTestsPage inside it) */}
          <Route path="/" element={<App />} />
          {/* Lazy load about us */}
          <Route path="/aboutus" element={<AboutUsPage />} />
          {/* Redirect /home to / */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* Catch all unmatched paths */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
