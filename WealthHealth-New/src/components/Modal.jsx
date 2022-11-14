
function Modale({children})
{
    function handleCloseModale()
    {
        document.querySelector(".modale").classList.add("d-none")
    }

    return (
        <div className='modale d-none'>

            <div className="modale-content">

                {children}

                <div className="modale-close" onClick={ handleCloseModale } >

                    <i className="fa-solid fa-xmark"></i>

                </div>

            </div> 

        </div>
    )
}
    
export default Modale