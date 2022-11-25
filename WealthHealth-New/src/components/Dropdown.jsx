import { useState } from "react"

function Dropdown({title, children})
{
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="dropdown">

            <button className="dropdown-button test" onClick={handleOpen}>
                { title }
            </button>

            { open ? <div className="dropdown-content">{children}</div> : <div></div> }

        </div>
    )
}

export default Dropdown