import React from 'react';

import Select from 'react-select';
import currencies from "./Currencies";

export default function Select2Dropdown() {
    return (
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={currencies[0]}
          isClearable={true}
          isSearchable={true}
          name="currencies"
          options={currencies}
        />
    );
}
