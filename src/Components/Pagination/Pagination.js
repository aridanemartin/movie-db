import { useState } from "react";
import PaginationUi from "@mui/material/Pagination";
import "./Pagination.scss";

export const Pagination = ({ setPage }) => {
  const [loading, setLoading] = useState(false);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {loading ? (
        <h1>"Loading"</h1>
      ) : (
        <div className="pagination">
          <PaginationUi count={500} onChange={handleChange} />
        </div>
      )}
    </>
  );
};
