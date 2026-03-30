import { useEffect, useState } from "react";
import { server } from "../App";

function OrdersRoute() 
{

    const [ orders, setOrders ] = useState([]);

    async function getOrders() {

        try
        {
            let response = await fetch( server + "/orders" );
            let data = await response.json();
            
            if (!response.ok) {
                throw new Error(response.status);
            }
            console.log( data );
            setOrders( data );
        } catch( error ) {
            console.log("Errore: " + error );
            alert("Connessione al server fallita. Riprovare o contattare il supporto tecnico.")
        }
    }

    useEffect(() => {
        getOrders();
    }, []);


    async function handleSubmit( event ) {

        event.preventDefault();

        try
        {
            let form = new FormData( event.target );
            let json = Object.fromEntries( form );

            let response = await fetch( server + "/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json)
            });

            if(!response.ok){
                throw new Error(response.status);
            }

            alert("Ordine salvato correttamente!");
            getOrders();

            event.target.reset();
        } catch( error ){
            console.log("Errore: " + error );
            alert("Errore nel salvataggio. Riprovare o contattare il supporto tecnico.");
        }
    }

    async function handleDelete( event, id ) {
        
        event.preventDefault();

        try 
        {
            let response = await fetch( server + "/orders/" + id, {
                method: "DELETE"
            });

            if(!response.ok) {
                throw new Error(response.status);
            }

            alert("Ordine eliminato correttamente");
            getOrders();

        } catch( error ) {
            console.log("Errore: " + error );
            alert("Errore nell'eliminazione dell'ordine. Riprovare o contattare il supporto tecnico.");
        }
    }

    return(
        <main>
            <form onSubmit={ handleSubmit } className="d-flex justify-content-evenly align-items-center">
                <div>
                    <label htmlFor="cliente" className="form-label">Cliente:</label>
                    <input name="cliente" id="cliente" minLength={ 5 } className="form-control" required></input>
                </div>
                <div>
                    <label htmlFor="prodotto" className="form-label">Prodotto:</label>
                    <input name="prodotto" id="prodotto" minLength={ 5 } className="form-control" required></input>
                </div>
                <div>
                    <label htmlFor="quantita" className="form-label">Quantità:</label>
                    <input type="number" name="quantita" id="quantita" min={ 1 } className="form-control" required></input>
                </div>
                <div>
                    <label htmlFor="data_ordine" className="form-label">Data:</label>
                    <input type="date" name="data_ordine" id="data_ordine" className="form-control" required></input>
                </div>
                <button className="btn btn-primary bg-gradient mt-4">Conferma</button>
            </form>
            <hr></hr>
            <table className="table table-striped table-hover text-center align-middle w-75 container rounded-3 overflow-hidden shadow-lg">
                <thead className="table-dark fw-bold">
                    <tr>
                        <td>ID</td>
                        <td>CLIENTE</td>
                        <td>PRODOTTO</td>
                        <td>QUANTITA</td>
                        <td>DATA</td>
                        <td>ELIMINA</td>
                    </tr>
                </thead>
                <tbody>
                    { orders.map(( order ) => (
                        <tr key={ order.id }>
                            <td>{ order.id }</td>
                            <td>{ order.cliente }</td>
                            <td>{ order.prodotto }</td>
                            <td>{ order.quantita }</td>
                            <td>{ order.data_ordine }</td>
                            <td>
                                <form onSubmit={(e) => { handleDelete(e, order.id)}}>
                                    <button className="btn btn-danger bg-gradient"><i className="bi bi-trash3-fill"></i></button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default OrdersRoute;