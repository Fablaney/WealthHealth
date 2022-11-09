import React, { useState } from "react"

// plugin
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import getYear from "date-fns/getYear"
import getMonth from "date-fns/getMonth"
import range from "lodash.range"

function Calendar(param)
{
    // console.log(param)
    const [SelectedDate, setSelectedDate] = useState(new Date())

    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
        // <input className="custom-input-date" onClick={onClick} ref={ref} value={value}/>
            
        <button className="custom-input-date" onClick={onClick} ref={ref}>
            {value}
        </button>
    ))

    const years = range(1970, getYear(new Date()) + 10, 1)

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    return (
        <div className="calendar">
            <DatePicker
            
                renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
                }) => (
                    <div
                        style={{
                            margin: 1,
                            display: "flex",
                            justifyContent: "center",
                        }}
                        >
    
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            {"<"}
                        </button>

                        <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(value)}
                        >
                            {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>

                        <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                            }
                        >
                            {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {">"}
                        </button>

                    </div>
                )}

                selected={SelectedDate}
                onChange={(date) => setSelectedDate(date)}
                customInput={<ExampleCustomInput />}
                withPortal
                fixedHeight
                dateFormat="dd/MM/yyyy"

            />
        </div>    
    )
}
export default Calendar