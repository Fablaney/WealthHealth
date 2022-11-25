/* eslint-disable jsx-a11y/accessible-emoji */

export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage }) => {

    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1
  
    return (
        <>
            <div className="pagination">

                <p>
                    Page {activePage} of {totalPages}
                </p>

                <p>
                    Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
                </p>

                <div className="buttons-next-prev">
                     <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
                        <i className="fa-solid fa-backward"></i>
                        &nbsp;
                        First
                    </button>

                    <button disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
                        <i className="fa-solid reverse fa-play"></i>
                        &nbsp;
                        Previous
                    </button>

                    <button disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
                        Next
                        &nbsp;
                        <i className="fa-solid fa-play"></i>
                    </button>

                    <button disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
                        Last
                        &nbsp;
                        <i className="fa-solid fa-forward"></i>
                    </button>
                </div>

            </div>
        </>
    )
}