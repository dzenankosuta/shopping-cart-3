/* eslint-disable react/prop-types */
import "./Pagination.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination({ brojStranica, setPage, page }) {
  const niz = [];
  for (let i = 1; i <= brojStranica; i++) {
    niz.push(i);
  }

  return (
    <>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
        className="arrow"
      >
        <MdKeyboardArrowLeft />
      </button>
      {niz.map((value, index) => {
        const isPageActive = page === value;
        return (
          <button
            key={index}
            style={{ backgroundColor: isPageActive ? "#f47422" : "#003366" }}
            onClick={() => setPage(value)}
          >
            {value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === niz.length}
        className="arrow"
      >
        <MdKeyboardArrowRight />
      </button>
    </>
  );
}
