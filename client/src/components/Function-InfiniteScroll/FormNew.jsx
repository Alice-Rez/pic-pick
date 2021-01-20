import React from "react";

export default function FormNew(props) {
  return (
    <form
      action=""
      className="form-inline"
      onSubmit={(e) => {
        e.preventDefault();
        if (props.pageNumber === 1) {
          props.setSearchOn((prevSearchOn) => {
            return !prevSearchOn;
          });
        } else {
          props.setPageNumber(1);
        }
      }}
    >
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control form-control-lg search"
          id="search"
          name="search"
          onInput={(e) => {
            props.setQuery(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn main mb-2 btn-lg">
        Search
      </button>
    </form>
  );
}
