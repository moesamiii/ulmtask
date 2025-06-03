import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import TestCard from "../components/TestCard/TestCard";
import Pagination from "../components/Pagination/Pagination";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import NoDataMessage from "../components/NoDataMessage/NoDataMessage";
import Navbar from "../components/Navbar/Navbar";
import "./MedicalTestsPage.css";

const MedicalTestsPage = () => {
  const { t, i18n } = useTranslation();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          "https://newulmmed.com/api/MedicalTest/GetAllActiveMedicalTestsWithoutPrice",
          {
            params: {
              PageNumber: currentPage,
              pageSize: pageSize,
            },
          }
        );

        const data = response.data;
        setTests(data.data || []);
        setTotalPages(Math.ceil(data.totalCount / pageSize));
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || t("fetch_error")
        );
        setTests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, [currentPage, i18n.language]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (tests.length === 0 && !loading)
    return <NoDataMessage message={t("no_data")} />;

  return (
    <div className="medical-tests-page">
      <Navbar />
      <h1 className="page-title">{t("medical_tests_title")}</h1>
      <div className="medical-tests-grid">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default MedicalTestsPage;
