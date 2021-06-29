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
    <Grid container direction="column" justify="center" fixed spacing={2}>
      {data.map((field, i) => (
        <Grid container spacing={2} style={{ marginTop: "2%" }}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} spacing={2}>
            <Select2Dropdown
              setData={setData}
              currencyKey={field.objKey}
              updateFieldChanged={updateFieldChanged}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} spacing={2}>
            <TextField
              id="lastName"
              fullWidth
              label="Price"
              variant="outlined"
              value={field.objValue}
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
          </Grid>
        </Grid>
      ))}
      <Grid container spacing={2} className="mt-2">
        <button
          style={buttonStyle}
        >
          <i class="fa fa-plus" style={{marginRight: '4px'}} aria-hidden="true"></i>
          Add Currencies
        </button>
      </Grid>
    </Grid>
  );
}

export default App;
