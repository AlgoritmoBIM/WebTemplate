import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from routes.projects import router as projects_router

# Load environment variables
load_dotenv()

app = FastAPI(
    title="BIM WebTemplate API",
    description="Backend API for BIM Building Information Modeling Platform",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(projects_router, prefix="/api", tags=["API"])

# Health check endpoint
@app.get("/health", tags=["Health"])
async def health_check():
    """Check API health status"""
    return {"status": "healthy", "version": "0.1.0"}

# Root endpoint
@app.get("/", tags=["Root"])
async def root():
    """Root endpoint with API information"""
    return {
        "message": "Welcome to BIM WebTemplate API",
        "version": "0.1.0",
        "docs": "/docs",
        "endpoints": {
            "projects": "/api/projects",
            "health": "/health"
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
