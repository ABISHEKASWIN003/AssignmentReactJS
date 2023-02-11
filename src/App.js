import "./App.css";
import { useEffect, useState } from "react";
import api from "./Api/Api";
import { Nominee } from "./Compounds/index";
import Button from "./Compounds/Button/Button";
import Modal from "./Compounds/Modal/Model";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      const users = await api.getBallotData();
      setData(users.items);
    };

    getData();
    setLoading(false);
  }, []);
  const [active, setActive] = useState({});
  const [selected, setSelected] = useState([
    {
      id: "",
      catagories: "",
      title: "",
      photoUrL: "",
      selected: false,
    },
  ]);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  console.log(data);
  return (
    <div className="App">
      <div className="container">
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <Nominee
                setActive={setActive}
                active={active}
                data={item}
                index={index}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          ))}
        <button onClick={() => setIsOpen(!isOpen)} className="button">
          SUBMIT
        </button>
        {isOpen && (
          <Modal
            selected={selected}
            setSelected={setSelected}
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            Hello
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
//<Button selected={selected} setSelected={setSelected} />
