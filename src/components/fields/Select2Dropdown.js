import React from 'react';

import Select from 'react-select';

export default function Select2Dropdown({ i, data, setData, field, updatePairKey, currencies }) {
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
            fontSize: '1.5rem',
            // cursor: 'text',
            // outline: '0px',
            // border: '1px solid rgb(227, 233, 243)',
            // borderRadius: '2px',
            // color: 'rgb(51, 55, 64)',
            // backgroundColor: 'transparent',
        })
    }
    
    const handleChange = (event) => {
        console.log(event.target.value)
    }

    const formatField = (info) => {
        let formatted = {}
        formatted.label = info.objKey
        formatted.value = info.objValue
        return formatted
    }

    return (
        <Select
        //   className="strapi-field"
          classNamePrefix="select"
          defaultValue={currencies[0]}
          value={formatField(field)}
          isClearable={true}
          isSearchable={true}
          name="currencies"
          options={currencies}
          styles={customInputStyles}
          className="pure-input-1 container-right"
          onChange = {item =>
                updatePairKey(i, item)
            }
        />
    );
}
