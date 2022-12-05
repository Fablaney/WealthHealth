import React from "react"
function Select({ id, options })
{
    return (
        <select 
            id={id}
        >
            {
                options.map((option, index) => (
                    <option value={option.name} key={index}>
                        {option.name}
                    </option>
                ))
            }
        </select>
    )
}

export default Select