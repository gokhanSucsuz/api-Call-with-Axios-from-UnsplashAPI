/* eslint-disable react/prop-types */

import { useState } from "react"

/* eslint-disable no-unused-vars */
export default function SearchHeader({ handleSubmit }) {
    const [valueInput, setValue] = useState("")
    const handleFormSubmit = (event) => {
        event.preventDefault()
        handleSubmit(valueInput)
    }
    const handleChange = () => {
        setValue(event.target.value)
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label>What are you looking for?</label>
                <input value={valueInput} onChange={handleChange} />
            </form>
        </>
    )
}