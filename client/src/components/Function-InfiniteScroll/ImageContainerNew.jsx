import React, { useRef, useCallback } from "react";
import ImageCard from "../ImageCard";

export default function ImageContainerNew(props) {
  const { loading, hasMore, photos, setPageNumber, pageNumber } = props;

  const observer = useRef();
  const lastPhotoElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        console.log(pageNumber, hasMore);
        if (entries[0].isIntersecting && hasMore) {
          console.log("visible");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log(pageNumber, hasMore);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  let filteredPhotos = photos.filter((item) => item.cover_photo);

  return (
    <section className="card-columns mt-5">
      {filteredPhotos.map((item, index) => {
        if (item.cover_photo) {
          if (index === filteredPhotos.length - 1) {
            return (
              <div ref={lastPhotoElementRef} key={item.id}>
                <ImageCard info={item} />
              </div>
            );
          } else {
            return (
              <div key={item.id}>
                <ImageCard info={item} />
              </div>
            );
          }
        } else {
          return null;
        }
      })}
    </section>
  );
}
