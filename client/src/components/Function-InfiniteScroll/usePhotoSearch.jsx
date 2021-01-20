import { useEffect, useState } from "react";
import axios from "axios";

export default function usePhotoSearch(query, pageNumber, searchOn) {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({ noResults: false, APINotWork: false });
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setPhotos([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setErr({ noResults: false, APINotWork: false });
    axios({
      method: "POST",
      url: "/search",
      data: {
        query: query,
        page: pageNumber,
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.data.results.length > 0) {
          setPhotos((prevPhotos) => {
            res.data.results.map((result) => {
              console.log(result.id);
              return;
            });
            return [...prevPhotos, ...res.data.results];
          });
          console.log(photos);
          setHasMore(res.data.total_pages > pageNumber);
        } else {
          if (query !== "") {
            console.log("error");
            setErr((prevError) => {
              return { ...prevError, noResults: true };
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setErr((prevError) => {
          return { ...prevError, APINotWork: true };
        });
      });
  }, [pageNumber, searchOn]);

  return { err, photos, loading, hasMore };
}
