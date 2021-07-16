import React, { useState } from "react";
import ReactDOM from "react-dom";

import currencies from "./components/fields/Select2Currencies";

// CUSTOM STYLES
import './css/inputSyles.css'

// CUSTOM COMPONENTS
import Select2Dropdown from './components/fields/Select2Dropdown'
import CountryModal from "./components/CountryModal";

function App() {
  // HOLDS THE FORM DATA
  const [data, setData] = useState([{objKey: 'Canadian Dollar | CAD', objValue: '20.00'}, {objKey: 'Angolan Kwanza | AOA', objValue: '45.00'}]);

  // Logic to change value of individual value field
  const updatePairValue = (event, index) => {

    let newArr = [...data]; // copying the old datas array
    newArr[index].objValue = event.target.value; // replace event.target.value with whatever you want to change it to
    // console.log(`This is the new value: ${newArr[index].objValue}`)
    setData(newArr); // Set the real array to be equal to the temporary array

    // console.log('index: ' + index);
    // console.log('property name: '+ event.target.value);
    // console.log(`This is how the new data looks: {objKey: ${data[index].objKey}, objValue: ${data[index].objValue}}`)
  }

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const updatePairKey = (index, key) => {
    let newArr = [...data]; // copying the old datas array
    newArr[index].objKey = key.label; // replace event.target.value with whatever you want to change it to
    // console.log(`This is the new key: ${newArr[index].objKey}`)
    setData(newArr); // Set the real array to be equal to the temporary array
  }

  return (
    <>
      <div className="container">
        <section>
        {data.map((field, i) => (
          <form class="pure-form pure-form-stacked">
            <div className="pure-g" style={{ marginTop: "1%" }}>
              <div className="pure-u-1-2">
                <Select2Dropdown
                  i={i}
                  data={data}
                  setData={setData}
                  field={field}
                  updatePairKey={updatePairKey}
                  currencies={currencies}
                />
              </div>
              <div className="pure-u-1-2">
                <input
                  id={`${i}value_field`}
                  label="Price"
                  className="pure-input-1 container-left"
                  style={{
                    height: '3.4rem',
                    lineHeight: '3.4rem',
                    fontWeight: '400',
                    fontSize: '1.3rem'
                  }}
                  value={field.objValue}
                  // className="strapi-field"
                  placeholder='Price...'
                  // onChange={(event) => {
                  //   setData([
                  //     ...data,
                  //     {
                  //       ...field,
                  //       objValue: event.target.value
                  //     }
                  //   ]);
                  //   console.log(i)
                  //   console.log(data);
                  // }}
                  onChange={event =>
                    updatePairValue(event, i)
                  }
                />
              </div>
            </div>
          </form>
        ))}
        <div className="pure-g">
          <div className="pure-u-1-2">
            <button
              className="strapi-button-primary"
              onClick={toggleModal}
            >
              <i class="fa fa-plus" style={{marginRight: '4px'}} aria-hidden="true"></i>
              Add Currencies
            </button>
          </div>
        </div>
        </section>
      </div>
      <CountryModal toggleModal={toggleModal} isOpen={isOpen} data={data} setData={setData} currencies={currencies}/>
    </>
  );
}

export default App;
