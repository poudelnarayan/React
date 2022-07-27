import React from "react";
import { useParams, Outlet } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <React.Fragment>
      <p>{params.quoteId}</p>
      <Outlet />
    </React.Fragment>
  );
};

export default QuoteDetail;
