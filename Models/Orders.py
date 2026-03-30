from pydantic import BaseModel, Field
from datetime import date


class Orders(BaseModel):
    cliente: str = Field(max_length=255, min_length=3)
    prodotto: str = Field(max_length=255, min_length=3)
    quantita: int = Field(gt=0)
    data_ordine: date