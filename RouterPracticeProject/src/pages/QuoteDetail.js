import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <React.Fragment>
      <p>{params.quoteId}</p>
    </React.Fragment>
  );
};

export default QuoteDetail;
