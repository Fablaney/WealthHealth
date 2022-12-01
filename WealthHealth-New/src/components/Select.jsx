import React from "react"
function Select({ name, id, register, options })
{
    return (
        <select name={name}
            id={id}
            // {...register({register}, {required: true} )}
        >
            {
                options.map((option, index) => (
                    <option value={option} key={index}>
                        {option}
                    </option>
                ))
            }
        </select>
    )
}

export default Select