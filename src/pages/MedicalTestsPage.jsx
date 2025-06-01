import { useState, useEffect } from "react";
import TestCard from "../components/TestCard/TestCard";
import Pagination from "../components/Pagination/Pagination";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import NoDataMessage from "../components/NoDataMessage/NoDataMessage";
import "./MedicalTestsPage.css";

const MedicalTestsPage = () => {
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
        const response = await fetch(
          `https://newulmmed.com/api/MedicalTest/GetAllActiveMedicalTestsWithoutPrice?PageNumber=${currentPage}&pageSize=${pageSize}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch medical tests");
        }

        const data = await response.json();
        setTests(data.data || []);
        setTotalPages(Math.ceil(data.totalCount / pageSize));
      } catch (err) {
        setError(err.message);
        setTests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (tests.length === 0 && !loading) {
    return <NoDataMessage />;
  }

  return (
    <div className="medical-tests-page" dir="rtl">
      <h1 className="page-title">قائمة الفحوصات الطبية</h1>
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
