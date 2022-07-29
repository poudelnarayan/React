import React from "react";
import { useParams, Outlet, Routes, Route, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Narayan",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Poudel",
    text: "Learning React is great!",
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route
          path=""
          element={
            <div className="centered">
              <Link className="btn--flat" to={`comments`}>
                Load Comments
              </Link>
            </div>
          }
        />
      </Routes>

      <Outlet />
    </React.Fragment>
  );
};

export default QuoteDetail;
