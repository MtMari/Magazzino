function HomeRoute() 
{
    return(
        <main className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
                <h1 className="display-6"><i className="bi bi-upc-scan fs-1 me-2"></i>Brand.</h1>
                <p>Benvenuto nel magazzino virtuale.</p>
            </div>
            <div className="d-flex flex-column align-items-center mt-4 p-4 shadow border rounded-4">
                <p>Questo è un progetto scolastico sviluppato con:</p>
                <ul>
                    <li>Frontend: React, React Router. Bootstrap</li>
                    <li>Backend: FastAPI</li>
                    <li>Database: MySQL</li>
                </ul>
            </div>
        </main>
    )
}

export default HomeRoute;