import React, { useState } from 'react'
import Modal from "react-modal";

export default function CountryModal({ toggleModal, isOpen, data, setData, currencies }) {

    // const [tempCountries, setTempCountries] = useState([...currencies]);
    // const [tempData, setTempData] = useState([]);

    let preTemp = []

    data.forEach(item => {
        preTemp.push(item.code)
    })

    const [tempData, setTempData] = useState([...preTemp]);
    const [tempCurrencies, setTempCurrencies] = useState([...currencies]);
    const [countrySearch, setCountrySearch] = useState('');

    // An object filled with key/value pairs of country codes and country labels
    let countryValues = {}

    tempCurrencies.forEach(currency => {
        countryValues[currency.value] = currency.label
    })


    // currencies.forEach(currency => {
    //     let currentValue = currency.value
    //     countryValues.push(currentValue)
    // })

    let createObj = (original) => {
        return { code: original, objKey: countryValues[original], objValue: ''}
    }

    const handleCheckboxChange = (event, index) => {
        let tempCode = event.target.value
        console.log(countryValues[tempCode])

        // If the value of the checked item exists inside of the tempData
        // array, it sets tempData to an array where that value is
        // filtered out.
        if (tempData.includes(tempCode)) {
            let tempArray = [...tempData]
            // tempArray[tempValue].checked = !tempArray[index].checked
            
            setTempData(tempArray.filter(currentCode => currentCode !== tempCode))
        
        // If the value of the checked item does NOT exist inside of
        // tempData, it adds it (pushes it) to the temp array, and tempData
        // is set to that.
        } else {
            let tempArray = [...tempData]
            tempArray.push(tempCode)
            setTempData(tempArray)
        }
        console.log(tempData)
    };

    const saveAdditions = () => {
        let newData = []
        tempData.forEach((item, i) => {
            if(preTemp.includes(item)) {
                data.forEach((oldObj, i) => {
                    oldObj.code == item && newData.push(oldObj)
                })
            } else {
                newData.push(createObj(item))
            }
        })
        setData(newData)
        toggleModal()
    }

    // Search function
    const handleSearch = (event) => {
        // Set's the value of your field to what you're typing in
        setCountrySearch(event.target.value)
        // Filter the countries (effectively "searching")
        let tempArray = [tempCurrencies]
        setTempCurrencies(tempArray.filter(country => country.includes(event.target.value)))
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
        >
            <div>
                <span className="country-modal-header">
                    Available Currencies
                </span>
                <input 
                    type="text" 
                    className="country-searchbar" 
                    placeholder={`Narrow down your search...`} 
                    value={countrySearch}
                    onChange = {handleSearch}
                />
            </div>
            <hr />
            <div class="pure-g country-window">
                {tempCurrencies.map((currency, i) => (
                    <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-3">
                        <label for="stacked-remember" class="pure-checkbox modal-text">
                            <input 
                                type="checkbox" 
                                id={`currency_checkbox_${i}`} 
                                value={currency.value}
                                checked={tempData.includes(currency.value) ? true : false}
                                onChange={(event) => handleCheckboxChange(event, i)}/> {currency.label}
                        </label>
                    </div>
                ))}
            </div>
            <button 
                onClick={toggleModal}
                className="strapi-button-danger"
                style={{ marginRight: '0.4rem'}}
            >
                Cancel
            </button>
            <button 
                onClick={saveAdditions}
                className="strapi-button-success"
            >
                Save
            </button>
        </Modal>
    )
}
