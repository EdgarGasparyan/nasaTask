import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "./Asteroids.css";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchNasaDubleData } from "../../redux/nasaSlice";


const Asteroids = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const start = startDate.toISOString().slice(0, 10);
  const end = endDate.toISOString().slice(0, 10);

  const { dayRangeData, loading } = useSelector((state) => state.nasa);

  const handleGo = () => {
    const one_day = 1000 * 60 * 60 * 24;
    const newStartDate = startDate;
    const newEndDate = endDate;
    let result;
    result = Math.ceil(
      (newEndDate.getTime() - newStartDate.getTime()) / one_day
    );
    if (result > 7) {
      setError(true);
    } else {
      setError(false);
    }

    const params = {
      start,
      end,
    };

    dispatch(fetchNasaDubleData(params));
  };

  


  const generateTable = (dayRangeData) => {
    if (dayRangeData) {
      return dayRangeData.map((index) =>
        index.map((item, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>{item.name}</td>
                <td>{item.close_approach_data[0].miss_distance.kilometers}</td>
                <td>{item.absolute_magnitude_h}</td>
                <td>{item.is_potentially_hazardous_asteroid ? "YES" : "NO"}</td>
                <td>
                  {item.estimated_diameter.meters.estimated_diameter_min}{" "}
                  {item.estimated_diameter.meters.estimated_diameter_max}
                </td>
              </tr>
            </tbody>
          );
        })
      );
    }
  };

  return (
    <section>
      <p>Search for Asteroids based on their closest approach date to Earth</p>
      <div className="dataPicker">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
        />
        <button className="button" onClick={(e) => handleGo(e)}>
          Go
        </button>
      </div>
      {loading && <p>Loading</p>}
      {error ? (
        <div className=" alert alert-error">
          <p>Range should not exceed 1 week</p>
        </div>
      ) : (
        <table>
          {dayRangeData && (
            <>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Distance (km)</th>
                  <th>Absolute Magnitude</th>
                  <th>Is potentially hazardous </th>
                  <th>Diameter (meters)</th>
                </tr>
              </thead>
              {generateTable(dayRangeData)}
            </>
          )}
          <tfoot></tfoot>
        </table>
      )}
    </section>
  );
};

export default Asteroids;
