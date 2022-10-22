import React, { useState, useEffect } from "react";
import "./Planet.css";

const Planet = () => {
  const [formvalue, setFormvalue] = useState({
    planet_name: "",
    galaxy: "",
    diametr: "",
    distance: "",
    name: "",
    email: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const validationform = (value) => {
    console.log(value);
    const errors = {};
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!formvalue.planet_name) {
      errors.planet_name = "Required";
    } else if (formvalue.planet_name.length < 16) {
      errors.planet_name = "Min length is 16 symbols";
    }
    if (!formvalue.email) {
      errors.email = "Required";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "Email is not valid";
    }
    if (!formvalue.galaxy) {
      errors.galaxy = "Required";
    }
    if (!formvalue.distance) {
      errors.distance = "Required";
    }
    if (!formvalue.diametr) {
      errors.diametr = "Required";
    }
    if (!formvalue.name) {
      errors.name = "Required";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue);
    }
  }, [formerror, formvalue, issubmit]);

  const handlevalidation = (e) => {
	e.preventDefault()
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
	 
  };


  const handlesubmit = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
  };

  return (
    <section id="planet">
      <p>
        If you found new planet you can add it to our directory (Reactive forms
        demo)
      </p>
      <div className="planet_submit">
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="planet_name"
            placeholder="Planet Name"
            value={formvalue.planet_name}
            onChange={handlevalidation}
          />
          <span>{formerror.planet_name}</span>
          <select
            name="galaxy"
            onChange={handlevalidation}
            value={formvalue.galaxy}
          >
            <option disabled="">Galaxy name</option>
            <option value="Milky Way">Milky Way</option>
            <option value="Messier 83">Messier 83</option>
            <option value="Black Eye Galaxy">Black Eye Galaxy</option>
            <option value="Pinwheel">Pinwheel</option>
            <option value="Canis Major Dwarf">Canis Major Dwarf</option>
            <option value="Somewhere else...">Somewhere else...</option>
          </select>
          <span>{formerror.galaxy}</span>
          <input
            type="number"
            name="diametr"
            placeholder="Diametr (km)"
            value={formvalue.diametr}
            onChange={handlevalidation}
          />
          <span>{formerror.diametr}</span>
          <input
            type="number"
            name="distance"
            placeholder="Distance (mln km)"
            value={formvalue.distance}
            onChange={handlevalidation}
          />
          <span>{formerror.distance}</span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formvalue.name}
            onChange={handlevalidation}
          />
          <span>{formerror.name}</span>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formvalue.email}
            onChange={handlevalidation}
          />
          <span>{formerror.email}</span>
          <button> Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Planet;
