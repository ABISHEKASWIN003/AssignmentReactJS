import React from "react";
import "../../App.css";
import Model from "../Modal/Model";

const Button = ({ setSelected, selected }) => {
  const result = selected.filter((obj) =>
    Object.values(obj).some((val) => val !== "")
  );

  console.log("filteredData", result);
  const clearState = (id) => {
    console.log("id", id);
    console.log("selected", selected[id]);
    setSelected(selected.filter((item) => item.id !== id));

    // console.log("ID", id);
  };
  return (
    <div>
      <div className="cards">
        {selected &&
          selected.map((item, i) => (
            <div key={i + 1}>
              <div className="cardPortal">
                <img
                  src={item.photoUrL}
                  className="cardImage"
                  alt={item.title}
                />
                <p className="cardT">{item.catagories}</p>
                <p className="cardTitle">{item.title}</p>
                <div className="buttonOverlay">
                  <button
                    // disabled={}
                    // id={data.title}
                    className="button"
                    onClick={() => clearState(item.id)}
                  >
                    Undo
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Button;
