from fastapi import FastAPI
import uvicorn
import database as query
from fastapi.middleware.cors import CORSMiddleware
from Models.Orders import Orders


app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
    
@app.get("/api/orders")
def get_orders():
    return query.getAll()

@app.post("/orders")
def new_order( order: Orders ):
    return query.insert( order.cliente, order.prodotto, order.quantita, order.data_ordine )

@app.delete("/orders/delete/{id}")
def delete_order( id: int ):
    return query.delete( id )


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)