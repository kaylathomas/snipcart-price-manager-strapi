import React, { useState } from "react";
import ReactDOM from "react-dom";

// MATERIAL UI COMPONENTS
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// FORM INPUT
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import CountryDropdown from "./components/CountryDropdown";

// CUSTOM STYLES
import './css/inputSyles.css'

// CUSTOM COMPONENTS
import Select2Dropdown from './components/Select2Dropdown'

const buttonStyle = {
  // Snip originally class GZXvt from Strapi dashboard
  height: '30px',
  padding: '0px 15px 2px',
  fontWeight: '600',
  fontSize: '0.9rem',
  lineHeight: 'normal',
  borderRadius: '2px',
  cursor: 'pointer',
  outline: '0px',
  backgroundColor: 'rgb(0, 126, 255)',
  border: '1px solid rgb(0, 126, 255)',
  color: 'rgb(255, 255, 255)',
  // My custom styles
  marginTop: '2%',
  // fontFamily: 'Lato'
}

function App() {
  // HOLDS THE FORM DATA
  const [data, setData] = useState([{ objKey: "Key", objValue: "First value!" }, {ojKey: "Another Key", objValue: "Second value!"}]);

  // Logic to change value of individual field data
  const updateFieldChanged = index => event => {

    console.log('index: ' + index);
    console.log('property name: '+ event.target.name);
    let newArr = [...data]; // copying the old datas array
    newArr[index] = event.target.value; // replace e.target.value with whatever you want to change it to

    setData(newArr); // ??
}

  return (
    <div className="container">
      <section>
      {data.map((field, i) => (
        <form class="pure-form pure-form-stacked">
          <div className="pure-g" style={{ marginTop: "1%" }}>
            <div className="pure-u-1-2">
              <Select2Dropdown
                setData={setData}
                currencyKey={field.objKey}
                updateFieldChanged={updateFieldChanged}
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
                // className="strapiField"
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
                onChange={
                  updateFieldChanged(i)
                }
              />
            </div>
          </div>
        </form>
      ))}
      <div className="pure-g">
        <div className="pure-u-1-2">
          <button
            style={buttonStyle}
          >
            <i class="fa fa-plus" style={{marginRight: '4px'}} aria-hidden="true"></i>
            Add Currencies
          </button>
        </div>
      </div>
      </section>
    </div>
  );
}

export default App;
