from fastapi import APIRouter
import database as query
from models.orders import Orders

router = APIRouter()


@router.get("/orders")
def get_orders():
    return query.getAll()

@router.post("/orders")
def new_order( order: Orders ):
    return query.insert( order.cliente, order.prodotto, order.quantita, order.data_ordine )

@router.delete("/orders/{id}")
def delete_order( id: int ):
    return query.delete( id )