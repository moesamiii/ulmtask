import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ar",
    debug: false,
    resources: {
      en: {
        translation: {
          home: "Home",
          services: "Services",
          about: "About Us",
          login: "Login",
          medical_tests_title: "Medical Test List",
          fetch_error: "An error occurred while fetching data.",
          no_data: "No medical tests found.",
        },
      },
      ar: {
        translation: {
          home: "الرئيسية",
          services: "خدماتنا",
          about: "من نحن",
          login: "تسجيل الدخول",
          medical_tests_title: "قائمة الفحوصات الطبية",
          fetch_error: "حدث خطأ أثناء جلب البيانات",
          no_data: "لم يتم العثور على فحوصات طبية.",
        },
      },
    },
  });

export default i18n;
