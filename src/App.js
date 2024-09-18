import {useState} from "react";
import {faker} from "@faker-js/faker";

import './App.css';
import {NameCard} from './components/NameCard';
import {generateDataList, shuffle, getRandomInt} from "./utils";


let masterData = generateDataList(9);

function App() {
    const [data, setData] = useState(masterData);
    const onShuffle = () => setData((oldData) => shuffle(oldData));

    const onChange = () => {
        const randomIndex = getRandomInt(data.length - 1);
        const randomPerson = data[randomIndex];
        randomPerson.name = faker.person.fullName(randomPerson.sex);
        setData([...data]);
    };

    return (
        <div className="App">
            <div className="button-group">
              <button onClick={onShuffle}>
                Shuffle Elements
              </button>
              <button onClick={onChange}>
                Change Random Element
              </button>
            </div>

            <div className="name-list-container">
                {data.map(i =>
                    <NameCard
                      key={i.id}
                      name={i.name}
                      id={i.id}
                      sex={i.sex}
                      age={i.age}
                      colors={i.colors}
                    />
              )}
            </div>
        </div>
    );
}

export default App;
