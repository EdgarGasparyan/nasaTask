import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./Astronomy.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchNasaSigleData } from "../../redux/nasaSlice";

const Astronomy = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { currentData, loading } = useSelector((state) => state.nasa);
  const dispatch = useDispatch();
  const day = startDate.toISOString().slice(0, 10);

  const handleSubmit = () => {
    dispatch(fetchNasaSigleData(day));
  };

  return (
    <section>
      <p>
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.
      </p>
      <div className="dataPicker">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
        />
        <button className="button" onClick={handleSubmit}>
          Go
        </button>
      </div>
      <div className="astronomy_container">
        {loading ? (
          <p>loading...</p>
        ) : (
          <div>
            <h5>{currentData.title}</h5>
            <p>{currentData.explanation}</p>
            <img src={currentData.hdurl} alt="" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Astronomy;
