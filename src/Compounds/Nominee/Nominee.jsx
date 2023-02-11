import React from "react";
import { useState } from "react";
import "../../App.css";

const Nominee = ({ data, setSelected, selected }) => {
  const [Select, Selected] = useState("Select");
  const changeState = (keys, item, imageurl) => {
    const updatedDetails = [
      ...selected,
      {
        id: keys,
        catagories: data.title,
        title: item.title,
        photoUrL: imageurl,
        selected: true,
      },
    ];
    const result = updatedDetails.filter((obj) =>
      Object.values(obj).some((val) => val !== "")
    );

    setSelected(result);
    Selected("Selected");
  };
  const Button = (props) => {
    const { disabled, id, items, photoUrL, Select } = props;
    console.log("disabled", disabled);
    return (
      <button
        className="button"
        disabled={Selected === "Selected"}
        onClick={() => changeState(id, items, photoUrL)}
      >
        {Select}
      </button>
    );
  };
  return (
    <div>
      <h2> {data && data.title}</h2>
      <div className="cards">
        {data &&
          data.items.map((item, i) => (
            <div key={i}>
              <div className="card">
                <img
                  src={item.photoUrL}
                  className="cardImage"
                  alt={item.title}
                />
                <p className="cardTitle">{item.title}</p>
                <div className="cardButton">
                  {console.log("Loading", selected[0].id)}
                  <Button
                    Selected={Selected}
                    Select={Select}
                    disabled={selected[0].selected}
                    // id={data.title}
                    className="button"
                    id={data.id}
                    items={data.items[i]}
                    photoUrL={item.photoUrL}
                  >
                    {Select}
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Nominee;
