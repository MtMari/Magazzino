from fastapi import FastAPI
import uvicorn
import cors
import routes


app = FastAPI()
app.include_router(routes.router)

cors.setup_cors( app )
    

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)