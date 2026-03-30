import mysql.connector as db
from datetime import date

def get_connection():
    return db.connect(
        host        = "127.0.0.1",
        port        = "3306",
        user        = "root",
        password    = "",
        database    = "magazzino02"
    )

def getAll():
    conn = get_connection()
    cur = conn.cursor( dictionary=True )
    cur.execute( "SELECT * FROM orders" )
    rows = cur.fetchall()
    conn.commit()
    conn.close()

    return rows

def insert( cliente: str, prodotto: str, quantita: int, data_ordine: date ):
    conn = get_connection()
    cur = conn.cursor( dictionary=True )
    cur.execute( "INSERT INTO orders VALUES(default, %(cliente)s, %(prodotto)s, %(quantita)s, %(data_ordine)s)", {
        "cliente": cliente.capitalize(),
        "prodotto": prodotto,
        "quantita": quantita,
        "data_ordine": data_ordine
    })
    conn.commit()
    conn.close()

def delete( id: int ):
    conn = get_connection()
    cur = conn.cursor( dictionary=True )
    cur.execute( "DELETE FROM orders WHERE id = %(id)s", { "id": id })
    conn.commit()
    conn.close()



if __name__ == "__main__":
    if get_connection():
        print("ok")