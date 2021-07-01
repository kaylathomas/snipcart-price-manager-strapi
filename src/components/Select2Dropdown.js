import React from 'react';

import Select from 'react-select';
import currencies from "./Select2Currencies";

export default function Select2Dropdown() {
    let customInputStyles = {
        input: () => ({

            // textTransform: 'none',
            // textIndent: '0px',
            // textShadow: 'none',
            // display: 'inline-block',
            // textAlign: 'start',
            // appearance: 'auto',
            // backgroundColor: '-internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59))',
            // margin: '0em',
            // padding: '1px 2px',
            // borderWidth: '2px',
            // borderStyle: 'inset',
            // borderColor: '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))',
            // borderImage: 'initial',
            // width: '100%',
            height: '3.4rem',
            lineHeight: '3.4rem',
            fontWeight: '400',
            fontSize: '1.3rem',
            // cursor: 'text',
            // outline: '0px',
            // border: '1px solid rgb(227, 233, 243)',
            // borderRadius: '2px',
            // color: 'rgb(51, 55, 64)',
            // backgroundColor: 'transparent',
        })
    }
    console.log(currencies)
    return (
        <Select
        //   className="strapiField"
          classNamePrefix="select"
          defaultValue={currencies[0]}
          isClearable={true}
          isSearchable={true}
          name="currencies"
          options={currencies}
          styles={customInputStyles}
          className="pure-input-1 container-right"
        />
    );
}
