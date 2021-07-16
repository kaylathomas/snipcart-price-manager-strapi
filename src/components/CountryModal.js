import React, { useState } from 'react'
import Modal from "react-modal";

export default function CountryModal({ toggleModal, isOpen, data, setData, currencies }) {

    // const [tempCountries, setTempCountries] = useState([...currencies]);
    // const [tempData, setTempData] = useState([]);

    const [tempData, setTempData] = useState([]);

    let countryValues = []

    currencies.forEach(currency => {
        let currentValue = currency.value
        countryValues.push(currentValue)
    })

    console.log(countryValues)

    let createObj = (original) => {
        return { objKey: original.label, objValue: '', objCode: original.code, checked: true }
    }

    // let handleCheckboxChange = (event, index) => {
    //     let tempObj = event.target.value
    //     let tempArray = [...currencies]
    //     tempArray[index].checked = !tempArray[index].checked
    //     setTempData([tempArray]);
    //     // if (tempData.includes(tempObj)) {
    //     //     setTempData(tempData.filter(currencyObj => currencyObj !== tempObj));
    //     // }
    //     console.log(tempData)
    // };

    let handleCheckboxChange = (event, index) => {
        let tempObj = event.target.value
        let tempValue = tempObj.value
        if (tempData.includes(tempObj)) {
            let tempArray = [...tempData]
            tempArray[tempValue].checked = !tempArray[index].checked
            tempArray.filter(currencyObj => currencyObj !== tempObj)
            setTempData([tempArray]);
        } else {
            let oldArray = [...tempData]
            setTempData(oldArray => [...oldArray, tempObj])
        }
        console.log(tempData)
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
        >
            <div>

            </div>
            <hr />
            <div class="pure-g">
                {currencies.map((currency, i) => (
                    <div class="pure-u-1-3">
                        <label for="stacked-remember" class="pure-checkbox modal-text">
                            <input 
                                type="checkbox" 
                                id={`currency_checkbox_${i}`} 
                                value={currency}
                                onClick={(event) => handleCheckboxChange(event, i)}/> {currency.label}
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
                onClick={toggleModal}
                className="strapi-button-success"
            >
                Save
            </button>
        </Modal>
    )
}
