import React, { useState } from "react";
import Header from "../Header";
import FormNew from "./FormNew";
import ImageCard from "../ImageCard";
import Err from "../Err";
import Footer from "../Footer";
import usePhotoSearch from "./usePhotoSearch.jsx";
import Loader from "./Loader";
import ImageContainerNew from "./ImageContainerNew";

export default function AppNew() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchOn, setSearchOn] = useState(false);

  const { err, photos, loading, hasMore } = usePhotoSearch(
    query,
    pageNumber,
    searchOn
  );

  return (
    <React.Fragment>
      <Header />
      <main className="px-5 pb-5 d-flex align-items-center flex-column">
        <p className="lead my-5">
          Find your favorite photos collection from{" "}
          <a href="https://unsplash.com/">Unsplash.com</a>
        </p>
        <FormNew
          setQuery={setQuery}
          setSearchOn={setSearchOn}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
        />
        {loading ? <Loader /> : null}
        {err.noResult || err.APINotWork ? (
          <Err error={err} />
        ) : (
          <ImageContainerNew
            loading={loading}
            hasMore={hasMore}
            photos={photos}
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
          />
        )}
      </main>
      <Footer />
    </React.Fragment>
  );
}
