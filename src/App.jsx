import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MedicalTestsPage from "./pages/MedicalTestsPage";
import "./App.css";

function App() {
  const { i18n } = useTranslation();

  // Set HTML direction attribute based on current language globally
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="app-container">
      <MedicalTestsPage />
    </div>
  );
}

export default App;
